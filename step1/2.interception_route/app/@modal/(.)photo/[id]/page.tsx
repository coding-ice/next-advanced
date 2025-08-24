import { photos } from "../../../data";

const PhotoModal = async ({ params }) => {
  const { id } = await params;
  const photo = photos.find((item) => item.id === id);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        background: "pink",
      }}
    >
      <img width={400} src={photo.src} />
    </div>
  );
};

export default PhotoModal;
