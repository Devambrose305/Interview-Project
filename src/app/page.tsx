// src/app/page.tsx
"use client";

import React, { useState } from "react";
import TaskManager from "./TaskManager";
import CreateTaskForm from "./CreateTaskForm";

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      name: "Sample Task 1",
      schedule: "daily",
      nextRun: "2024-11-09 10:00:00",
      isDeleted: false,
    },
    {
      id: "2",
      name: "Sample Task 2",
      schedule: "weekly",
      nextRun: "2024-11-09 11:00:00",
      isDeleted: false,
    },
  ]);

  const handleCreateTask = (newTask: {
    id: string;
    name: string;
    schedule: string;
    nextRun: string;
  }) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Remove task by id
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <CreateTaskForm onCreate={handleCreateTask} />
      <TaskManager tasks={tasks} onDelete={handleDeleteTask} />
    </main>
  );
};

export default HomePage;
