"use client";

import { useState } from "react";
import { Trash } from "lucide-react";

import DeleteButton from "@/components/DeleteButton";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";

export default function DeleteTaskDialog({ taskId }: { taskId: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={buttonVariants({ variant: "destructive" })}>
        <Trash />
        <span className="sr-only">Remove Task</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete task</DialogTitle>
          <DialogDescription>This task will be permanently deleted</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className={buttonVariants({ variant: "outline" })}>Cancel</DialogClose>
          <DeleteButton id={taskId} closeDialog={() => setOpen(false)} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
