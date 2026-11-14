"use client";

import useSWRMutation from "swr/mutation";
import { useSWRConfig } from "swr";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

import { API_URL } from "@/lib/utils";
import { deleteTask } from "@/lib/data";

export default function DeleteButton({ id, closeDialog }: { id: number; closeDialog: () => void }) {
  const { isMutating, trigger } = useSWRMutation(`${API_URL}/${id}`, deleteTask, {
    onSuccess: () =>
      toast.add({
        type: "success",
        description: "Task has been deleted",
      }),
    onError: () =>
      toast.add({
        type: "error",
        description: "Something went wrong",
      }),
  });

  const { mutate } = useSWRConfig();

  async function handleDelete() {
    try {
      await trigger();
      closeDialog();
      await mutate(API_URL);
    } catch {
      closeDialog();
    }
  }

  return (
    <Button variant="destructive" onClick={handleDelete} disabled={isMutating}>
      {isMutating ? "Deleting..." : "Delete"}
    </Button>
  );
}
