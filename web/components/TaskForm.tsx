"use client";

import { useForm, Controller } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { useSWRConfig } from "swr";

import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

import { type TaskFormType, taskStatus, type Task } from "@/lib/utils";
import { API_URL } from "@/lib/utils";
import { createTask, updateTask } from "@/lib/data";

export default function TaskForm({
  task,
  action,
  closeDialog,
}: {
  task?: Task;
  action: "create" | "update";
  closeDialog: () => void;
}) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TaskFormType>({
    defaultValues: {
      title: task?.title || "",
      status: task?.status || "TODO",
    },
  });

  const { trigger: createTrigger } = useSWRMutation(API_URL, createTask, {
    onSuccess: () =>
      toast.add({
        type: "success",
        description: "Task has been created.",
      }),
    onError: () =>
      toast.add({
        type: "error",
        description: "Something went wrong",
      }),
  });
  const { trigger: updateTrigger } = useSWRMutation(`${API_URL}/${task?.id}`, updateTask, {
    onSuccess: () =>
      toast.add({
        type: "success",
        description: "Task has been updated.",
      }),
    onError: () =>
      toast.add({
        type: "error",
        description: "Something went wrong",
      }),
  });

  const { mutate } = useSWRConfig();

  async function onSubmit(data: TaskFormType) {
    try {
      switch (action) {
        case "create":
          await createTrigger(data);
          break;
        case "update":
          await updateTrigger(data);
          break;
        default:
          return;
      }
      closeDialog();
      await mutate(API_URL);
    } catch {
      closeDialog();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-5">
        <Controller
          name="title"
          control={control}
          rules={{
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters",
            },
            validate: (value) => value.trim().length > 0 || "Task title cannot be empty",
          }}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Title</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                type="text"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="status"
          control={control}
          rules={{
            required: "Invalid status",
            validate: (value) => taskStatus.includes(value) || "Invalid status",
          }}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Status</FieldLabel>
              <NativeSelect {...field} id={field.name} aria-invalid={fieldState.invalid}>
                {taskStatus.map((option) => (
                  <NativeSelectOption key={option} value={option}>
                    {option.replace("_", " ")}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>

      <DialogFooter className="mt-4">
        <DialogClose className={buttonVariants({ variant: "outline" })}>Cancel</DialogClose>
        <Button type="submit">
          {task ? (
            <>{isSubmitting ? "Updating..." : "Update"}</>
          ) : (
            <>{isSubmitting ? "Creating..." : "Create"}</>
          )}
        </Button>
      </DialogFooter>
    </form>
  );
}
