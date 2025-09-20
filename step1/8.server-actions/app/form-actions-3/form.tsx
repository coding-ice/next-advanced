"use client";

import { useActionState } from "react";
import { createTodo } from "./actions";

const FormActions3 = () => {
  const [state, formAction, isPending] = useActionState(createTodo, {
    message: "",
  });

  return (
    <form action={formAction}>
      <input type="text" name="todo" />
      <button type="submit">{isPending ? "Adding..." : "Add"}</button>
      <p>{state.message}</p>
    </form>
  );
};

export default FormActions3;
