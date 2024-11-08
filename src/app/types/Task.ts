// src/types/Task.ts
export interface Task {
  id: string;
  name: string;
  schedule: string;
  nextRun: string;
  isDeleted: boolean;
}
