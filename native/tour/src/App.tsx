import { useState } from 'react';
import { Button, Flex, Popover } from 'antd';

import OnBoarding from './components';
import Mask from './components/OnBoarding/Mask';
import { Global } from './config/theme';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Global />

      {/* <Mask
        ele={document.querySelector('#box')!}
        renderMaskContent={wrapper => (
          <Popover
            content={
              <div className="step">
                <button>下一步</button>
              </div>
            }
          >
            {wrapper}
          </Popover>
        )}
      /> */}

      <OnBoarding
        steps={[
          {
            selector: () => document.querySelector('.btn1')!,
            renderContent: curStep => <div>hi 我是第一步</div>,
          },
          {
            selector: () => document.querySelector('.btn2')!,
            renderContent: curStep => <div>第二步</div>,
          },
        ]}
      />
      <Flex justify="center" align="center" style={{ marginTop: 100 }}>
        <Button.Group>
          <Button className="btn1">step 1</Button>
          <Button className="btn2">step 2</Button>
        </Button.Group>
      </Flex>
    </>
  );
}

export default App;
