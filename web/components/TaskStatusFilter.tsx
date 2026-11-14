"use client";

import { useQueryState, parseAsStringLiteral } from "nuqs";

import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

import { taskStatus } from "@/lib/utils";

const taskStatusOptions = ["ALL", ...taskStatus] as const;

export default function TaskStatusFilter() {
  const [status, setStatus] = useQueryState(
    "status",
    parseAsStringLiteral(taskStatusOptions).withDefault("ALL"),
  );
  return (
    <NativeSelect
      value={status}
      onChange={(e) => setStatus(e.target.value as (typeof taskStatusOptions)[number])}
    >
      {taskStatusOptions.map((option) => (
        <NativeSelectOption key={option} value={option}>
          {option.replace("_", " ")}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
}
