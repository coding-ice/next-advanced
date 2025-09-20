"use client";

import { useActionState } from "react";
import { createUser } from "./form";

function FormValidated() {
  const [state, formAction, isPending] = useActionState(createUser, {
    message: "",
  });

  return (
    <form action={formAction}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" /> <br />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" /> <br />
      <button type="submit">{isPending ? "Adding..." : "Add"}</button>
      <p>{state.message}</p>
    </form>
  );
}

export default FormValidated;
