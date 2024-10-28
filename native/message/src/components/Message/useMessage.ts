import { useContext } from 'react';

import { MessageContext } from './ConfigProvider';

function useMessage() {
  const { messageRef } = useContext(MessageContext);

  return messageRef!.current!;
}

export default useMessage;
