import { cn } from "cn";

import { Badge } from "@/components/ui/badge";
import UpdateTaskDialog from "@/components/UpdateTaskDialog";
import DeleteTaskDialog from "@/components/DeleteTaskDialog";
import { Skeleton } from "@/components/ui/skeleton";

import type { TaskStatus, Task } from "@/lib/utils";

const badgeColor: Record<TaskStatus, string> = {
  TODO: "bg-secondary text-secondary-foreground",
  IN_PROGRESS: "bg-blue-700 dark:bg-blue-400",
  DONE: "bg-green-700 dark:bg-green-400",
};

export function TaskListHeader() {
  return (
    <div className="grid grid-cols-3 px-4 py-2 bg-muted font-medium border-y">
      <div>Title</div>
      <div className="text-center">Status</div>
      <div className="text-right">Actions</div>
    </div>
  );
}

export function TaskList({ children }: { children: React.ReactNode }) {
  return <ul className="[&>li]:border-b [&>li]:last:border-b-0">{children}</ul>;
}

export function TaskListItem({ task }: { task: Task }) {
  return (
    <li className="grid grid-cols-3 p-4 items-center">
      <div>{task.title}</div>
      <Badge className={cn("mx-auto", badgeColor[task.status])}>{task.status.replace("_", " ")}</Badge>
      <div className="text-right space-x-2">
        <UpdateTaskDialog task={task} />
        <DeleteTaskDialog taskId={task.id} />
      </div>
    </li>
  );
}

export function TaskListItemSkeleton() {
  return (
    <li className="grid grid-cols-3 p-4 items-center">
      <Skeleton className="h-3.5 my-0.75" />
      <Skeleton className="h-5 w-24 mx-auto" />
      <div className="flex gap-2 justify-end">
        <Skeleton className="w-9.5 h-8" />
        <Skeleton className="w-9.5 h-8" />
      </div>
    </li>
  );
}
