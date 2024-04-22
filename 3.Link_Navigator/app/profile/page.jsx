import { use } from 'react';
import { redirect } from 'next/navigation';

async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // return 'ok';
}

export default function Page() {
  const res = use(getUser());
  if (!res) {
    redirect('/login');
  }

  return (
    <>
      <h1>Profile</h1>
    </>
  );
}
