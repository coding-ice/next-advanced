import { memo } from 'react';
import { Checkbox } from 'antd';

import useTodos, { Todo } from '../../hooks/useTodos';

interface TodosProps {}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (name: string) => void;
}

const Todos: React.FC<TodosProps> = () => {
  const { todos, toggleTodo } = useTodos();

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.name} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

const TodoItem = memo(({ todo, toggleTodo }: TodoItemProps) => {
  console.log('re-render');

  return (
    <div>
      <Checkbox value={todo.name} checked={todo.done} onChange={() => toggleTodo(todo.name)} />
      {todo.name}
    </div>
  );
});

export default Todos;
