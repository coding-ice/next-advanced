import { findTodos } from "./actions";
import { AddTodoForm } from "./form";

export default async () => {
  const data = await findTodos();

  return (
    <ul>
      <AddTodoForm />
      {data.map((d) => (
        <li key={d}>{d}</li>
      ))}
    </ul>
  );
};
