const WORKOUTS_API_URL = "http://localhost:5000/workouts";
const OPENAI_API_KEY = "YOUR_OPENAPI_KEY";
const CHAT_API_URL = "https://api.openai.com/v1/chat/completions";

const fetchWorkoutList = async () => {
  const res = await fetch(WORKOUTS_API_URL);

  return res.json()
};

// Fetch the data from the API endpoint
const createTrainingList = () => {
  // Re-render
  var workoutList = document.getElementById("workout-list");
  workoutList.innerHTML = ''

  fetchWorkoutList()
    .then((data) => {
      // Generate the HTML code for the workout list
      data.forEach((workout) => {
        // Create the list group item for the workout
        var workoutItem = document.createElement("div");
        workoutItem.classList.add("list-group-item");

        // Create the header for the workout item
        var workoutHeader = document.createElement("div");
        workoutHeader.classList.add("list-group-item", "active");
        workoutHeader.innerHTML = workout.date;
        workoutList.appendChild(workoutHeader);

        // Create the body for the workout item
        workout.exercises.forEach((exercise) => {
          var exerciseRow = document.createElement("div");
          exerciseRow.classList.add("row");
          workoutItem.appendChild(exerciseRow);

          var exerciseType = document.createElement("div");
          exerciseType.classList.add("col-sm-4");
          exerciseType.innerHTML = exercise.type;
          exerciseRow.appendChild(exerciseType);

          var exercisePlace = document.createElement("div");
          exercisePlace.classList.add("col-sm-4");
          exercisePlace.innerHTML = exercise.place;
          exerciseRow.appendChild(exercisePlace);

          var exerciseDetails = document.createElement("div");
          exerciseDetails.classList.add("col-sm-4");
          exerciseDetails.innerHTML = exercise.details ?? "Planning in progress...";
          exerciseRow.appendChild(exerciseDetails);
        });

        workoutList.appendChild(workoutItem);
      });
    });
};

const getAISuggestion = async (workout) => {
  const { exercises } = workout;

  const newExercises = exercises;
  for (const [i, exercise] of exercises.entries()) {
    const chatGptQuestion = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Hey, could you please give me a ${exercise.place} workout suggestion for today? It is a ${exercise.type} day.`,
        },
      ],
    };
    if (!exercise.details) {
      const res = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify(chatGptQuestion),
      });

      const aiSuggestion = await res.json()
      newExercises[i].details = aiSuggestion.choices[0].message.content;
    }
  }
  workout.exercises = newExercises;

  console.log(`Updating workout ${workout.id}....`);
  await fetch(`${WORKOUTS_API_URL}/${workout.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(workout),
  });

  console.log(`Workout ${workout.id} updated!`);
};

const collectAISuggestions = async () => {
  const workouts = await fetchWorkoutList();
  await Promise.all(workouts.map(async workout => {
    await getAISuggestion(workout);
  }))
  createTrainingList();
};

document.addEventListener('DOMContentLoaded', () => {
  createTrainingList();
  collectAISuggestions();
})
