import { createTodo, findTodos } from "./actions";
import Button from "./button";

export default async () => {
  const todos = await findTodos();

  return (
    <>
      <form action={createTodo}>
        <input name="todo" type="text" />
        <button type="submit">submit</button>
      </form>
      <Button>添加运动</Button>
      <ul>
        {todos.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </>
  );
};
