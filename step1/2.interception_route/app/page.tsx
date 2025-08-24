import Link from "next/link";
import { photos } from "./data";

const HomePage = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {photos.map((photo) => (
        <Link key={photo.id} href={`/photo/${photo.id}`}>
          <img
            style={{ border: "1px solid pink" }}
            key={photo.id}
            src={photo.src}
            alt={photo.id}
            width={200}
          />
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
