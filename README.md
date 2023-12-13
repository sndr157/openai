# 🏋️‍♂️ AI Workout Planner with OpenAI Chat API 🤖

Welcome to the AI Workout Planner, where we blend cutting-edge technology with your fitness routine! 💪 This repository showcases a fun and simple example of integrating ChatGPT functionality into your very own fitness app.

## 🚀 App Adventure

Imagine an app that magically suggests workout plans based on your location and preferred exercise type. The main stage of our app displays a dazzling list of diverse trainings, loaded from a dynamic JSON file. 🌟 By default, the training details column is a blank canvas, waiting to be filled with the wisdom of ChatGPT.

## 🌈 App Magic

Here's how the enchanting workflow unfolds:
1. **Explore the Workouts:** Marvel at the list of workouts loaded from our mystical JSON file.
2. **Invoke ChatGPT's Wisdom:** With a wave of your virtual wand, we ask the OpenAI Chat Completion API for a workout suggestion based on your chosen place and exercise type.

## 🎉 Let's Get Started!

To embark on this magical journey, you'll need to:
1. **Serve the Workouts:** Use the spell `npx json-server data.json --port 5000` to conjure a REST API for our workouts.
2. **Activate the App:** Run the incantation `npx serve` in the root folder to bring the app to life on localhost:3000.

## 🔐 Guarding the Secrets

But wait! Before you unleash the magic, make sure to replace the mystical value of the `OPENAI_API_KEY` variable with your own API key. Don't have one? Get it at [OpenAI's Key Forge](https://platform.openai.com/account/api-keys). 🗝️

## 🚀 Quest for Improvements

Our magical realm is still evolving, and there are many quests to enhance the experience:
- ✨ **Create New Workouts:** Enchant ChatGPT to generate a workout program each time you add a new workout.
- 🔄 **Fine-Tune Updates:** Instead of a magical sweep, update the training details step by step for a smoother user experience.
- 🌐 **Beyond the JSON Realm:** Replace the faux JSON server with a real backend, unlocking the potential for diverse enhancements and features.

## Visuals 

![image](https://github.com/sndr157/openai/assets/127830026/0ef304a9-d0c0-4c17-a0c3-97ffa0ed3b34)


## 🌟 Have Fun!

This may be a tiny proof-of-concept, but the magic within is boundless! Consider using frameworks like React or Next.js to transform this snippet into a full-fledged, enchanting fitness app. Happy coding, and may your workouts be as spellbinding as your code! 🧙‍♂️✨
