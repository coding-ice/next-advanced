import React, { memo } from 'react';
import { createStyles } from 'antd-style';
import useHover from '@/hook/useHover';
// import { useHover } from 'react-use';

const useStyles = createStyles(({ css }) => ({
  wrapper: css``,
}));

const Base = memo(() => {
  const { styles } = useStyles();
  const [hoverable, hoverd] = useHover(hoverd => (
    <div style={{ width: 300, height: 50, background: 'pink' }}>Hover me! {hoverd && 'Thanks'}</div>
  ));

  return (
    <div className={styles.wrapper}>
      {hoverable}
      <div>{hoverd ? 'HOVERD' : ''}</div>
    </div>
  );
});

export default Base;
