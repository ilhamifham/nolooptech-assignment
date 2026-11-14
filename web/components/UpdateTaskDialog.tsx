"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import TaskForm from "@/components/TaskForm";

import { type Task } from "@/lib/utils";

export default function UpdateTaskDialog({ task }: { task: Task }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={buttonVariants({ variant: "outline" })}>
        <Pencil />
        <span className="sr-only">Edit Task</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update task</DialogTitle>
          <DialogDescription>
            Make changes to your task title and status, then save your updates
          </DialogDescription>
        </DialogHeader>
        <TaskForm task={task} action="update" closeDialog={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
