import React, { PropsWithChildren, RefObject, useRef } from 'react';

import MessageProvider, { MessageRef } from '.';

interface ConfigProviderProps {
  messageRef?: RefObject<MessageRef>;
}

export const MessageContext = React.createContext<ConfigProviderProps>({});

export default function ConfigProvider({ children }: PropsWithChildren<{}>) {
  const messageRef = useRef<MessageRef>(null);

  return (
    <MessageContext.Provider value={{ messageRef }}>
      <MessageProvider ref={messageRef}></MessageProvider>
      {children}
    </MessageContext.Provider>
  );
}
