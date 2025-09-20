import { getTodos } from "./actions";
import FormActions3 from "./form";

const FormActions3Page = async () => {
  const todos = await getTodos();

  return (
    <div>
      <FormActions3 />
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default FormActions3Page;
