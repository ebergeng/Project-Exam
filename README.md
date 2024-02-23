# Project Exam

This is my project Exam and it is a React-based web application designed to showcase a modern, scalable, and responsive UI/UX design. Utilizing a comprehensive stack including React 18, Styled Components, React Hook Form, Zustand for state management, and Vite as the build tool, this project aims to deliver a seamless and efficient user experience.

## Features

- Modern React 18 usage with Hooks and Functional Components
- Form handling with React Hook Form and validation with Yup
- Global state management with Zustand
- Styled Components for component-scoped CSS
- Client-side routing with React Router DOM
- Comprehensive linting and formatting setup with ESLint and Prettier

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (Preferably the latest version)
- npm for package management

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ebergeng/Project-Exam.git

2. Navigate to the project directory:

    ```bash
    cd project-exam

3. Install dependencies:

    ```bash
    npm install

4. Run the development server:

    ```bash
    npm run dev

The project should now be running on http://localhost:5173.

### Scripts
- npm run dev - Start the Vite development server.
- npm run build - Build the project for production.
- npm run test - Run tests with Jest.
- npm run lint - Lint JavaScript files.
- npm run lint-fix - Lint and auto-fix JavaScript files.
- npm run format - Format .jsx files with Prettier.
- npm run preview - Preview the production build locall


### Running Tests
To ensure the tests run smoothly, it is important to include the React import statement at the top of each test file that you wish to run. This is necessary due to the JSX syntax used within these files. Please make sure to add the following line at the beginning of your test files:
    
    ```bash
    import React from "react";
    
This import statement allows your test environment to correctly parse and understand the JSX syntax, ensuring that your tests can be executed without issues.

### Acknowledgments
- React community for the comprehensive documentation and guides
- ChatGPT for being a supportive resource and providing assistance throughout the development of this project.