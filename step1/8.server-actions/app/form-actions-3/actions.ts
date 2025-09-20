"use server";

import { revalidatePath } from "next/cache";
const todos = ["吃饭", "睡觉", "coding"];

export async function getTodos() {
  return todos;
}

export async function createTodo(_, formData: FormData) {
  const todo = formData.get("todo") as string;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  todos.push(todo);
  revalidatePath("/form-actions-3");
  return {
    message: `add ${todo} success`,
  };
}
