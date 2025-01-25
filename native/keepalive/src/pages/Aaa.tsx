import { useState } from 'react';
import { Space } from 'antd';
import { Link } from 'react-router-dom';

interface AaaProps {}

const Aaa: React.FC<AaaProps> = () => {
  const [count, setCount] = useState(0);
  return (
    <Space size={10} direction="vertical">
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Space>
        <Link to="/bbb">/bbb</Link> <br />
        <Link to="/ccc">/ccc</Link>
      </Space>
    </Space>
  );
};

export default Aaa;
