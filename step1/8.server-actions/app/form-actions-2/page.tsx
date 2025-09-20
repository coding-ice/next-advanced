"use client";

import { useActionState } from "react";

const calculate = async (state: number, formData: FormData) => {
  const value = formData.get("value") as string;
  return state + Number(value);
};

const FormActions2Page = () => {
  const [state, formAction, isPending] = useActionState(calculate, 1);

  return (
    <form action={formAction}>
      <p>value: {state}</p>
      <p>isPending: {isPending ? "true" : "false"}</p>
      <input type="number" name="value" disabled={isPending} />
      <button type="submit">Calculate</button>
    </form>
  );
};

export default FormActions2Page;
