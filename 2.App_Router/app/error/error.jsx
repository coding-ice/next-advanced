'use client';

export default ({ children, reset }) => {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <button onClick={reset}>retry</button>
    </div>
  );
};
