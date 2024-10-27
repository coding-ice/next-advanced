import React, { ReactNode, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { createStyles } from 'antd-style';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useStore from './useStore';

export type Position = 'top' | 'bottom';

// message component props
export interface MessageProps {
  style?: React.CSSProperties;
  className?: string | string[];
  content: ReactNode;
  duration?: number;
  id?: number;
  position?: Position;
}

const useStyles = createStyles(({ css }) => ({
  wrapper: css`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    .message {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 200px;
      height: 40px;
      border: 1px solid #000;
      margin-bottom: 10px;
      transition: all 1s ease;
      pointer-events: all;

      &-enter {
        opacity: 0;
        transform: scale(1.2);
        &-active {
          opacity: 1;
          transform: scale(1);
        }
      }

      &-exit {
        opacity: 1;
        &-active {
          opacity: 0;
        }
      }
    }
  `,
}));

// 整体的默认设置
const MessageProvider: React.FC<{}> = props => {
  const { styles } = useStyles();
  const { messageList, add, update, remove, clearAll } = useStore('top');

  useEffect(() => {
    let timer = setInterval(() => {
      add({ content: Math.random().toString().slice(2, 8) });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const el = useMemo(() => {
    const divEl = document.createElement('div');
    divEl.className = 'message-wrapper';
    document.body.appendChild(divEl);
    return divEl;
  }, []);

  const wrapper = (
    <TransitionGroup className={styles.wrapper}>
      {messageList.top.map(message => (
        <CSSTransition key={message.id} timeout={1000} classNames="message">
          <span className="message"> {message.content}</span>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );

  return createPortal(wrapper, el);
};

export default MessageProvider;
