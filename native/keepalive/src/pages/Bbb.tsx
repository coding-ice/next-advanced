import { useState } from 'react';
import { Space } from 'antd';
import { Link } from 'react-router-dom';

interface BbbProps {}

const Bbb: React.FC<BbbProps> = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>{count}</h3>
      <Space size={10} direction="vertical">
        <button onClick={() => setCount(count + 1)}>+1</button>
        <Link to="/">去首页</Link> <br />
      </Space>
    </>
  );
};

export default Bbb;
