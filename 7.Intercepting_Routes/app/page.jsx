import { photos } from './data';
import Link from 'next/link';

export default function Page() {
  return (
    <ul>
      {photos.map(({ id, src }) => {
        return (
          <li key={id}>
            <Link href={`/photo/${id}`}>
              <img style={{ width: 30 }} src={src} alt="" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
