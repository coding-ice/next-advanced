import React from "react";

export default function Page() {
  return (
    <React.Profiler id="hello">
      {new Array(100000).fill(0).map(() => (
        <h3>Hello Next.js!</h3>
      ))}
    </React.Profiler>
  );
}
