import React, { forwardRef, memo } from 'react';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => ({
  wrapper: css``,
}));

export interface TransformOffset {
  x: number;
  y: number;
}

interface TransformProps {
  offset?: TransformOffset;
  children?: React.ReactNode;
}

const Transform = forwardRef<HTMLDivElement, TransformProps>(({ offset, children }, ref) => {
  const { styles } = useStyles();

  return (
    <div
      ref={ref}
      className={styles.wrapper}
      style={{
        position: 'relative',
        left: offset?.x ?? 0,
        top: offset?.y ?? 0,
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
});

export default Transform;
