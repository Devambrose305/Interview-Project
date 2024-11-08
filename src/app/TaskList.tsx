import React from "react";
import { Task } from "../types/Task"; // Import Task type from the shared file

interface TaskListProps {
  tasks: Task[];
  onDelete: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks
        .filter((task) => !task.isDeleted) // Filter out deleted tasks
        .map((task) => (
          <li key={task.id} className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">{task.name}</h3>
              <p>Schedule: {task.schedule}</p>
              <p>Next Run: {task.nextRun}</p>
            </div>
            <button
              onClick={() => onDelete(task.id)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
