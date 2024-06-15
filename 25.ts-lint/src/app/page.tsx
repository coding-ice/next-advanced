import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";

// export const revalidate = '100';

export default function Home() {
  return (
    <div>
      <Link href="/demo">go Home</Link>
    </div>
  );
}
