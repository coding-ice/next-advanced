import { photos } from "../../data";

const PhotoPage = async ({ params }) => {
  const { id } = await params;
  const photo = photos.find((photo) => photo.id === id);

  return <img style={{ width: 300 }} src={photo.src} />;
};

export default PhotoPage;
