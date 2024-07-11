'use client';

import { useSearchParams, usePathname } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  console.log(searchParams.get('sort'));

  function updateSorting(order) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', order);
    window.history.pushState(null, null, `?${params}`);
  }

  return (
    <>
      <button onClick={() => updateSorting('asc')}>asc</button>
      <button onClick={() => updateSorting('desc')}>desc</button>
    </>
  );
}
