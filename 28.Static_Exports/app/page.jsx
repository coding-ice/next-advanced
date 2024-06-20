// ssr components
// export default async function Page() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await res.json();

//   return <h1>Hello Next.js! {data.title}</h1>;
// }

// client components
"use client";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>hi next.js</h1>
      <Link href="/other">other</Link>
    </>
  );
}
