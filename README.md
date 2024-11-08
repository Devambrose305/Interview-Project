Interview Project - Task Manager

This project is a task management tool built using the Next.js framework with TypeScript, React, and TailwindCSS. The tool allows users to view, create, edit, and delete tasks, with support for scheduling tasks with customizable execution times using cron-like syntax.

Features

User Operations:
- View, create, edit, and delete tasks (logical deletion).

Task Scheduling:
- Set task execution time with flexible options:
  - Daily at a fixed time.
  - Every N hours at specific minutes.
  - Monthly on a specific day.
  - Weekly on a specific day at a fixed time.
  - Custom cron-like syntax for scheduling.

Task Attributes:
- Task ID (UUIDv4 for uniqueness).
- Task name (up to 250 characters).
- Task execution time.
- Next run time.
- Task creation and update times.

Task List Features:
- Filter and paginate tasks.
- View task name, readable task definition, and next execution time (both in UTC and the user’s local time).

Editing Tasks:
- Task editing via a dropdown select for daily, hourly, monthly, weekly, or custom cron formats.
- Error handling during form submission to prevent saving invalid data.

Database Integration:
- Tasks are stored in a PostgreSQL database using Prisma ORM.

Tech Stack

Frontend:
- Next.js
- React
- TypeScript
- TailwindCSS
- ShadcnUI (for UI components)

Backend:
- Prisma ORM for database interaction
- PostgreSQL database

Utilities & Libraries:
- Cron-Parser for scheduling tasks
- UUID for unique task identifiers
- Zod for runtime validation of form data

Setup Instructions

Prerequisites:
- Make sure you have the following installed:
  - Node.js (v18 or later)
  - npm (or yarn)

Installation:
1. Clone the repository:
   git clone https://github.com/Devambrose305/Interview-Project.git
   cd Interview-Project

2. Install dependencies:
   npm install

3. Set up your database with Prisma:
   - Create a .env file in the root of your project and add your PostgreSQL connection URL:
     DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   - Run Prisma migrations:
     npx prisma migrate dev

4. Run the development server:
   npm run dev

The app will be available at http://localhost:3000.

Running the App:
- After the app is set up and running, you can start interacting with the task manager and explore the features like adding, editing, and deleting tasks, as well as setting custom execution schedules.

Usage:
- Viewing Tasks: Upon logging into the app, users will see a list of tasks with their names, next execution time, and readable task definitions.
- Creating Tasks: Users can add new tasks by entering the task name and choosing a schedule (daily, hourly, monthly, weekly, or custom cron).
- Editing Tasks: Modify the execution schedule of existing tasks, including adjusting the frequency and timing.
- Deleting Tasks: Tasks can be deleted, but they will be logically removed, meaning the task data remains in the database until manually purged.



