"use client";

import { useFormState } from "react-dom";

// export default () => {
//   const increment = (prev, formData) => {
//     // return [...prev, formData.get("todo")];
//     return prev + 1;
//   };

//   const [state, formAction] = useFormState(increment, 0);
//   return (
//     <form>
//       {JSON.stringify(state)}
//       <button formAction={formAction}>increment</button>
//     </form>
//   );
// };

export default () => {
  const addTodo = (prev, formData) => {
    // return [...prev, formData.get("todo")];
    return [...prev, formData.get("todo")];
  };

  const [state, formAction] = useFormState(addTodo, ["吃饭"]);
  return (
    <form formAction={formAction}>
      {JSON.stringify(state)} <br />
      <input type="text" name="todo" />
      <button type="submit">increment</button>
    </form>
  );
};
