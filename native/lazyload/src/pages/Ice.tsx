import React, { memo } from 'react';
import { createStyles } from 'antd-style';
import LazyLoad from 'react-lazyload';

import img from '@/assets/image.png';

const useStyles = createStyles(({ css }) => ({
  wrapper: css`
    div {
      height: 100px;
      margin-bottom: 10px;
      background: pink;
    }
  `,
}));

const Ice = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.wrapper}>
      <div>ice</div>
      <div>ice</div>
      <div>ice</div>
      <div>ice</div>
      <div>ice</div>
      <div>ice</div>
      <div>ice</div>
      <div>ice</div>
      <div>ice</div>
      <LazyLoad placeholder="loading..." offset={100}>
        <img src={img} />
      </LazyLoad>
    </div>
  );
};

export default Ice;
