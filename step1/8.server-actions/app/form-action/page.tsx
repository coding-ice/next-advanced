import { createTodo, findTodoList } from "../actions/actions";

const FormActionPage = async () => {
  const todos = await findTodoList();

  return (
    <>
      <h3>Todo List</h3>
      <form action={createTodo}>
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </>
  );
};

export default FormActionPage;
