import { Space } from 'antd';
import { Link } from 'react-router-dom';

interface CccProps {}

const Ccc: React.FC<CccProps> = () => {
  return (
    <Space size={10} direction="vertical">
      <Link to="/">去首页</Link> <br />
    </Space>
  );
};

export default Ccc;
