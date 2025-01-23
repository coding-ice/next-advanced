import { useCallback, useState } from 'react';
// 修改拿个对象，返回新的对象
import { produce } from 'immer';

// 'use-immer' -> 可以跟 useState 一样的使用

export interface Todo {
  name: string;
  course: string;
  done: boolean;
}

function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([
    { name: 'ice', course: 'react', done: false },
    { name: 'panda', course: 'js', done: false },
  ]);

  const toggleTodo = useCallback((name: string) => {
    // setTodos(prevTodos => {
    //   const todosSlice = [...prevTodos];
    //   const currentIdx = todosSlice.findIndex(todo => todo.name === name);
    //   const currentTodo = todosSlice[currentIdx];
    //   todosSlice.splice(currentIdx, 1, {
    //     ...currentTodo,
    //     done: !currentTodo.done,
    //   });
    //   return todosSlice;
    // });

    setTodos(
      produce(draft => {
        const currentTodo = draft.find(todo => todo.name === name);
        if (currentTodo) {
          currentTodo.done = !currentTodo.done;
        }
      }),
    );
  }, []);

  return { todos, toggleTodo };
}

export default useTodos;
