import { photos } from "../../../data";

const PhotoModal = async ({ params }) => {
  const { id } = await params;
  const photo = photos.find((item) => item.id === id);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        bottom: 0,
        background: "pink",
        width: "100%",
      }}
    >
      <img width={400} src={photo.src} />
    </div>
  );
};

export default PhotoModal;
