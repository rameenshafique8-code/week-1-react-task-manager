# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React Task Manager (Part 1)
This project is a component-driven React application built with **Vite** as part of the **AUREX Full-Stack Internship Program (Month 2 - Week 1)**.
## 🚀 Live Demo & Links

- **Live Deployment Link:** [Click Here to View Live App](https://week-1-react-task-manager-chi.vercel.app/)
- **GitHub Repository Folder:** `week-1-react-task-manager`

## ✨ Features Implemented

- **Add Tasks:** Add new tasks using a controlled input form.
- **Input Validation:** Prevents adding empty or space-only tasks.
- **Display Tasks:** Dynamic rendering of task items using array mapping.
- **Toggle Task Completion:** Mark tasks as complete or incomplete.
- **Delete Tasks:** Remove individual tasks from the list state.

## 🏗️ Required Component Hierarchy

The project strictly follows the required architecture:
App
├── Header
├── TaskForm (Handles input state & form submission)
└── TaskList (Maps through task array)
    └── TaskItem (Individual task display & action buttons)
