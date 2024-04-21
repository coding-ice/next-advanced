'use client';

import { useState } from 'react';
import Link from 'next/link';

export default ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Link href="/keepState/about">
        <h3>about</h3>
      </Link>
      <Link href="/keepState/profile">
        <h3>profile</h3>
      </Link>
      <h4>layout count:{count}</h4>
      <button onClick={() => setCount(count + 1)}>set layout count</button>
      {children}
    </>
  );
};
