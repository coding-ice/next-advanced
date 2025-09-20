"use client";

import { FormEvent, useEffect, useState } from "react";

function Form() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const res = await fetch("/api/todo-list");
      const data = await res.json();
      setTodos(data.data);
    }
    getTodos();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/todo-list", {
      method: "POST",
      body: new FormData(e.target as HTMLFormElement),
    });
    const data = await res.json();
    setTodos(data.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="key" />
        <button type="submit">Add</button>
      </form>
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
