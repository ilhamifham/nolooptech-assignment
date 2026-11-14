export const taskStatus = ["TODO", "IN_PROGRESS", "DONE"] as const;

export type TaskStatus = (typeof taskStatus)[number];

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
};

export type TaskFormType = {
  title: string;
  status: TaskStatus;
};

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
