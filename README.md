# Chef Claude 🍳

An AI-powered recipe generator built with React that creates recipe suggestions based on ingredients available to the user.

## Screenshots

<img width="1512" height="866" alt="image" src="https://github.com/user-attachments/assets/c3b179c5-6483-46b3-8b5c-8b033ebe147b" />

<img width="1512" height="869" alt="image" src="https://github.com/user-attachments/assets/deca953c-b34c-4a8b-a378-06f56236296d" />

## About the Project

Chef Claude is an interactive recipe assistant that helps users decide what to cook by generating recipes from a list of available ingredients.

Users can add ingredients they have on hand and receive an AI-generated recipe formatted in Markdown, including suggested ingredients and cooking instructions.

The project focuses on building a responsive React interface while integrating external AI services through an API.

## Features

- Add and remove ingredients
- Generate recipes using AI
- Markdown-formatted recipe output
- Automatic scrolling to generated recipes
- Loading and error handling states
- Responsive user interface

## Tech Stack

- React
- JavaScript
- Vite
- Hugging Face Inference API
- React Markdown
- CSS

## How It Works

1. Users enter ingredients they currently have.
2. The ingredients are sent to an AI language model.
3. The AI generates a recipe recommendation.
4. The response is rendered as a formatted recipe.

## What I Learned

- Integrating AI APIs into a frontend application
- Managing React state and component communication
- Handling asynchronous API requests
- Working with environment variables
- Rendering AI-generated Markdown content safely
- Debugging API integration issues

## Development Approach

This project was developed through an iterative process of building features, testing behaviour, debugging issues, and improving the user experience.

AI tools were used as development assistants for exploration, debugging, and understanding unfamiliar concepts. All generated suggestions were reviewed, tested, and adapted during development.

## Local Development

### 1. Clone the repository

```bash
git clone https://github.com/kwerui/AI-Recipe-Generator.git
2. Install dependencies
npm install
3. Add environment variables
Create a .env.local file:
VITE_HF_ACCESS_TOKEN=your_huggingface_token
4. Start the development server
npm run dev
Open:
http://localhost:5173


