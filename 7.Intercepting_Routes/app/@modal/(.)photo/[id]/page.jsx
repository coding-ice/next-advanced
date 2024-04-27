import { photos } from '../../../data';

// 路由拦截 软连接 硬连接就到/photo（刷新）
export default ({ params: { id } }) => {
  const photo = photos.find((d) => d.id === id);
  return (
    <div style={{ width: '100%', height: 400, position: 'absolute', bottom: '0', background: 'pink' }}>
      <img src={photo.src} alt="" />
    </div>
  );
};
