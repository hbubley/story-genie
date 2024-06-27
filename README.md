# StoryGenie

StoryGenie is a web application that uses OpenAI to generate 3-part children's stories based on user input. The application collects 3-5 data points about the child and generates a dynamic and age-appropriate story.

## Features

- Generate dynamic and age-appropriate children's stories
- Collects 3-5 data points about the child
- Step-by-step form with progress indicator
- Story preview and option to create another story

## Technologies

- React
- TailwindCSS
- Vite
- OpenAI API

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/hbubley/story-genie.git
    cd storygenie
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your OpenAI API key:

    ```env
    VITE_API_KEY=your_openai_api_key
    ```

4. Run the development server:

    ```sh
    npm run dev
    ```

## Usage

1. Open your browser and go to `http://localhost:5173`.
2. Fill out the form with the child's information.
3. Click "Create Story" to generate a story.
4. View the generated story and create another one if desired.
