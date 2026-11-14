"use client";

import { Ghost } from "lucide-react";

import useTasks from "@/hooks/useTasks";

import { TaskListHeader, TaskList, TaskListItem, TaskListItemSkeleton } from "@/components/TaskList";
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from "@/components/ui/empty";

export function Tasks() {
  const { isLoading, error, tasks, hasFilter } = useTasks();

  if (error) return null;

  if (isLoading) {
    return (
      <>
        <TaskListHeader />
        <TaskList>
          {Array.from({ length: 5 }).map((_, index) => (
            <TaskListItemSkeleton key={index} />
          ))}
        </TaskList>
      </>
    );
  }

  if (!tasks.length) {
    return (
      <Empty className="border-t border-solid rounded-none h-90.5">
        <EmptyHeader>
          <Ghost />
          <EmptyTitle>{hasFilter ? "No Matching Tasks" : "No Tasks"}</EmptyTitle>
          <EmptyDescription>
            {hasFilter ? "No tasks match your current filter" : "You haven't created any tasks yet"}
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <>
      <TaskListHeader />
      <TaskList>
        {tasks.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </TaskList>
    </>
  );
}

export function TasksLength() {
  const { tasks } = useTasks();

  return <>{tasks.length ?? 0}</>;
}
