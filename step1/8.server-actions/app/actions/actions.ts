"use server";

import { revalidatePath } from "next/cache";

const data = ["吃饭", "打游戏", "冥想"];

export const findTodoList = async () => data;

export const createTodo = async (formData: FormData) => {
  const todo = formData.get("todo") as string;
  data.push(todo);
  revalidatePath("/form-action");
  return data;
};

export const createSports = async (name: string) => {
  const formData = new FormData();
  formData.set("todo", name);
  return await createTodo(formData);
};
