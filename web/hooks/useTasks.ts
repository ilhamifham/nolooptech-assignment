"use client";

import { useSearchParams } from "next/navigation";
import useSWR from "swr";

import { type TaskStatus, type Task } from "@/lib/utils";

import { API_URL } from "@/lib/utils";
import { getTasks } from "@/lib/data";

export default function useTasks() {
  const searchParams = useSearchParams();
  const query = searchParams.get("status") as TaskStatus | null;

  const hasFilter = Boolean(query);

  const url = `${API_URL}${hasFilter ? `?status=${query}` : ""}`;

  const { isLoading, error, data } = useSWR<Task[]>(url, getTasks);

  return { isLoading, error, tasks: data ?? [], hasFilter };
}
