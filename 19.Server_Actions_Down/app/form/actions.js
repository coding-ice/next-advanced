"use server";

import { revalidatePath } from "next/cache";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const todos = ["吃饭", "睡觉", "冥想"];

export async function findTodos() {
  return todos;
}

export async function createTodo(prev, formData) {
  await sleep(3000);
  const todo = formData.get("todo");
  todos.push(todo);
  revalidatePath("/form");

  return {
    message: `add ${todo} success!`,
  };
}
