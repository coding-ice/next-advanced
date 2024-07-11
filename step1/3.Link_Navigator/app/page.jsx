import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Link href="/home">home</Link>
      <Link href="/profile" scroll={false}>
        profile
      </Link>
    </>
  );
}
