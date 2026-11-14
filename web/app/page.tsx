import { Suspense } from "react";

import CreateTaskDialog from "@/components/CreateTaskDialog";
import TaskStatusFilter from "@/components/TaskStatusFilter";
import { Tasks, TasksLength } from "@/components/Tasks";

export default function Home() {
  return (
    <main className="max-w-312 mx-auto space-y-4">
      <header className="flex items-center justify-between gap-2">
        <div className="space-y-2">
          <h1 className="text-base font-medium leading-none">Task Manager</h1>
          <p className="text-muted-foreground">Organize your work and keep track of your daily tasks</p>
        </div>
        <CreateTaskDialog />
      </header>
      <section className="border rounded-md overflow-hidden">
        <div className="flex gap-2 items-center justify-between p-4">
          <h2 className="text-base font-medium leading-none">
            All Tasks{" "}
            <span className="text-muted-foreground">
              (
              <Suspense>
                <TasksLength />
              </Suspense>
              )
            </span>
          </h2>
          <Suspense>
            <TaskStatusFilter />
          </Suspense>
        </div>
        <Suspense>
          <Tasks />
        </Suspense>
      </section>
    </main>
  );
}
