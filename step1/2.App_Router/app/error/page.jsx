'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';

export default () => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <>
      {error ? (
        error()
      ) : (
        <>
          <button onClick={handleError}>get error</button>
          <button onClick={() => notFound()}>go not-found</button>
        </>
      )}
    </>
  );
};
