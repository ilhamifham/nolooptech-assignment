import { type TaskFormType } from "@/lib/utils";

export async function getTasks(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to get the tasks");
  return res.json();
}

export async function createTask(url: string, { arg }: { arg: TaskFormType }) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!res.ok) throw new Error("Failed to create this task");

  return res.json();
}

export async function updateTask(url: string, { arg }: { arg: TaskFormType }) {
  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!res.ok) throw new Error("Failed to update this task");

  return res.json();
}

export async function deleteTask(url: string) {
  const res = await fetch(url, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete this task");
  return res.json();
}
