import { createSports, createTodo, findTodoList } from "../actions/actions";
import Button from "../components/Button";

const FormActionPage = async () => {
  const todos = await findTodoList();

  return (
    <>
      <h3>Todo List</h3>
      {/* @ts-ignore */}
      <form action={createTodo}>
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>
      <Button />
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </>
  );
};

export default FormActionPage;
