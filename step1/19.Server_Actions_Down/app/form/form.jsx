"use client";

import { useFormStatus, useFormState } from "react-dom";
import { createTodo } from "./actions";

const initial = {
  message: "",
};

export function Submit() {
  const { pending } = useFormStatus();

  return <button disabled={pending}>{pending ? "Adding" : "add"}</button>;
}

export function AddTodoForm() {
  const [state, formAction] = useFormState(createTodo, initial);

  return (
    <form action={formAction}>
      <input type="text" name="todo" />
      <Submit />
      <p>{state.message}</p>
    </form>
  );
}
