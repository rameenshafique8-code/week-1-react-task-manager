
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
