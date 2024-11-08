// src/app/CreateTaskForm.tsx
"use client"; // Add this at the top to mark the file as a client component

import React, { useState } from "react";

interface CreateTaskFormProps {
  onCreate: (task: {
    id: string;
    name: string;
    schedule: string;
    nextRun: string;
  }) => void;
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ onCreate }) => {
  const [taskName, setTaskName] = useState<string>("");
  const [schedule, setSchedule] = useState<string>("daily");
  const [nextRun, setNextRun] = useState<string>(new Date().toISOString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: new Date().toISOString(), // Unique ID based on the timestamp
      name: taskName,
      schedule,
      nextRun,
    };
    onCreate(newTask); // Pass the new task to the parent
    setTaskName("");
    setSchedule("daily");
    setNextRun(new Date().toISOString());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Task Name</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Schedule</label>
        <select value={schedule} onChange={(e) => setSchedule(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTaskForm;
