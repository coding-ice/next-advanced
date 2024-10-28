import React, { forwardRef, PropsWithChildren, ReactNode, useEffect, useImperativeHandle, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { createStyles } from 'antd-style';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useStore from './useStore';
import useTimer from './useTimer';

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
    .message-item {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 200px;
      height: 40px;
      border: 1px solid #000;
      margin-bottom: 10px;
      transition: all 0.5s ease;
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

interface IMessageItemProps extends MessageProps {
  remove: (id: number) => void;
}

const MessageItem = ({
  className,
  id,
  duration,
  remove,
  children,
  ...rest
}: PropsWithChildren<Omit<IMessageItemProps, 'content'>>) => {
  const { onMouseEnter, onMouseLeave } = useTimer(id!, remove, duration);

  return (
    <span className={`message-item ${className}`} {...rest} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </span>
  );
};

export interface MessageRef {
  add: (messageProps: MessageProps) => number;
  update: (id: number, messageProps: MessageProps) => void;
  remove: (id: number) => void;
  clearAll: () => void;
}

const MessageProvider = forwardRef<MessageRef, {}>((props, ref) => {
  const { styles } = useStyles();
  const { messageList, add, update, remove, clearAll } = useStore('top');

  const el = useMemo(() => {
    const divEl = document.createElement('div');
    divEl.className = 'message-wrapper';
    document.body.appendChild(divEl);
    return divEl;
  }, []);

  if ('current' in ref!) {
    ref.current = {
      add,
      update,
      remove,
      clearAll,
    };
  }

  const wrapper = (
    <TransitionGroup className={styles.wrapper}>
      {messageList.top.map(({ position, content, ...rest }) => (
        <CSSTransition key={rest.id} timeout={1000} classNames="message-item">
          <MessageItem {...rest} remove={remove}>
            {content}
          </MessageItem>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );

  return createPortal(wrapper, el);
});

export default MessageProvider;
