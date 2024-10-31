import React, { forwardRef, memo } from 'react';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => ({
  wrapper: css``,
}));

type HandlerSize = 'default' | 'small';

interface HandlerProps {
  size?: HandlerSize;
  color?: string;
}

const Handler = forwardRef<HTMLDivElement, HandlerProps>(({ color, size = 'default' }, ref) => {
  const { cx } = useStyles();

  return (
    <div
      ref={ref}
      className={cx('color-picker-panel-palette-handler', {
        ['color-picker-panel-palette-handler-sm']: size === 'small',
      })}
      style={{
        background: color,
      }}
    />
  );
});

export default Handler;
