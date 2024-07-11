"use client";

import { createTodo } from "./actions";

export default ({ children }) => {
  return (
    <button
      onClick={async () => {
        const form = new FormData();
        form.set("todo", "运动");
        createTodo(form);
      }}
    >
      {children}
    </button>
  );
};
