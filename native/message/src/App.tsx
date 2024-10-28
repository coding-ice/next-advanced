import { useRef } from 'react';

import MessageProvider, { MessageRef } from './components/Message';
import ConfigProvider from './components/Message/ConfigProvider';
import useMessage from './components/Message/useMessage';
import { Global } from './config/theme';

function Button() {
  const { add } = useMessage();
  return (
    <button
      onClick={() =>
        add({
          content: 'success',
        })
      }
    >
      click
    </button>
  );
}

function App() {
  // const msgRef = useRef<MessageRef>(null);

  return (
    <>
      <Global />
      {/* <MessageProvider ref={msgRef} />
      <button
        onClick={() =>
          msgRef.current?.add({
            content: '请求成功！',
          })
        }
      >
        click
      </button> */}
      <ConfigProvider>
        <Button />
      </ConfigProvider>
    </>
  );
}

export default App;
