// src/app/TaskManager.tsx
import React from "react";
import { Task } from "../types/Task";

interface TaskManagerProps {
  tasks: Task[];
  onDelete: (id: string) => void;
}

const TaskManager: React.FC<TaskManagerProps> = ({ tasks, onDelete }) => {
  return (
    <div>
      <h2>Task Manager</h2>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <h3>{task.name}</h3>
          <p>Schedule: {task.schedule}</p>
          <p>Next Run: {task.nextRun}</p>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskManager;
