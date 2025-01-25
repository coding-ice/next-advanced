import { Space } from 'antd';
import { useLocation } from 'react-router-dom';

import { useKeepAliveOutlet } from './keepalive';

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const element = useKeepAliveOutlet();

  return (
    <Space size={20} direction="vertical">
      <div>当前文件夹： {pathname}</div>
      {element}
    </Space>
  );
};

export default Layout;
