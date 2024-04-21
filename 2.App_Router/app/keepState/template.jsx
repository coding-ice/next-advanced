'use client';
import { useState } from 'react';

export default ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h4>template: {count}</h4>
      <button onClick={() => setCount(count + 1)}>set templete count</button>
      {children}
    </>
  );
};
