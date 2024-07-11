import { photos } from '../../data';

export default ({ params: { id } }) => {
  const photo = photos.find((p) => p.id === id);
  return (
    <h3>
      <img style={{ width: 100, height: 100 }} src={photo.src} />
    </h3>
  );
};
