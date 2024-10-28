import { useState } from 'react';

import { MessageProps, Position } from '.';

type MessageList = {
  top: MessageProps[];
  bottom: MessageProps[];
};

const initialState = {
  top: [],
  bottom: [],
};

let count = 0;

function getId(messageProps: MessageProps) {
  if (messageProps.id) {
    return messageProps.id;
  }
  return ++count;
}

function getMessagePostion(preState: MessageList, id: number) {
  for (const [position, messages] of Object.entries(preState)) {
    if (messages.find(message => message.id === id)) {
      return position as Position;
    }
  }
}

function findMessageIndex(preState: MessageList, id: number) {
  const position = getMessagePostion(preState, id);

  let index = -1;
  if (position) {
    index = preState[position].findIndex(message => message.id === id);
  }

  return {
    position,
    index,
  };
}

function useStore(defaultPosition: Position = 'top') {
  const [messageList, setMessageList] = useState<MessageList>({ ...initialState });

  return {
    messageList,
    add: (messageProps: MessageProps) => {
      const id = getId(messageProps);
      setMessageList(preState => {
        if (messageProps.id && getMessagePostion(preState, id)) {
          return preState;
        }

        const position = messageProps.position || defaultPosition;
        const isTop = position === 'top';
        const messages = isTop
          ? [{ ...messageProps, id }, ...preState[position]]
          : [...preState[position], { ...messageProps, id }];

        return {
          ...preState,
          [position]: messages,
        };
      });

      return id;
    },

    update: (id: number, messageProps: MessageProps) => {
      if (!id && id !== 0) return;
      setMessageList(preState => {
        const nextState = { ...preState };
        const { position, index } = findMessageIndex(nextState, id);

        if (position && index !== -1) {
          nextState[position][index] = { ...nextState[position][index], ...messageProps };
        }

        return nextState;
      });
    },

    remove: (id: number) => {
      setMessageList(prevState => {
        const { position } = findMessageIndex(prevState, id);
        if (!position) {
          return prevState;
        }

        return {
          ...prevState,
          [position]: prevState[position].filter(message => message.id !== id),
        };
      });
    },

    clearAll: () => {
      setMessageList({ ...initialState });
    },
  };
}

export default useStore;
