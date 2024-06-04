"use client";
import { useFormStatus } from "react-dom";

export default () => {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <button type="submit" aria-disabled={pending}>
      {pending ? "Adding" : "Add"}
    </button>
  );
};
