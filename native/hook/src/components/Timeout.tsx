import React, { memo, useState } from 'react';
import { createStyles } from 'antd-style';

import useTimeout from '@/hook/useTimeout';

const useStyles = createStyles(({ css }) => ({
  wrapper: css``,
}));

const Timeout = memo(() => {
  const { styles } = useStyles();
  const [c, setC] = useState(0);

  useTimeout(() => {
    setC(c + 1);
  }, 300);

  return <div className={styles.wrapper}>count: {c}</div>;
});

export default Timeout;
