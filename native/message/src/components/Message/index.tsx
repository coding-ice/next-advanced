import React, { memo, ReactNode } from 'react';
import { createStyles } from 'antd-style';

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
  wrapper: css``,
}));

// 整体的默认设置
const MessageProvider: React.FC<{}> = props => {
  const { styles } = useStyles();

  return <div className={styles.wrapper}>Message</div>;
};

export default MessageProvider;
