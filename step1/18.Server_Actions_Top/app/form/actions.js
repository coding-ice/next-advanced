"use server";

import { revalidatePath } from "next/cache";

const data = ["阅读", "写作", "写代码"];

export async function findTodos() {
  return data;
}

export async function createTodo(formData) {
  const todo = formData.get("todo");
  data.push(todo);
  revalidatePath("/form");

  return data;
}
