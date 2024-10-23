import { useCallback, useEffect, useRef, type MouseEventHandler } from 'react';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => ({
  wrapper: css`
    height: 1500px;
    .box {
      width: 100px;
      height: 100px;
      background: pink;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      top: 800px;
    }
  `,
}));

function ClickPosition() {
  // 点击坐标的位置
  const { styles } = useStyles();
  const boxEl = useRef<HTMLDivElement>(null);
  const cb = useCallback(e => {
    console.log(e.pageY);
    console.log(e.clientY);
    console.log(e.offsetY);
    console.log(e.screenY);
  }, []);

  useEffect(() => {
    const box = document.querySelector('.box')!;
    box.addEventListener('click', cb);
    return () => {
      box.removeEventListener('click', cb);
    };
  }, []);

  const handleClick: MouseEventHandler<HTMLDivElement> = e => {
    // console.log(e.clientY);
    // console.log(e.pageY);
    // console.log(e.offsetY); // 合成事件中没有
    // console.log();
    const rect = boxEl.current?.getBoundingClientRect();
    console.log(rect);
    console.log('offsetY', e.pageY - rect!.top - scrollY);
    console.log('native', e.nativeEvent.offsetY);
  };

  return (
    <div className={styles.wrapper}>
      <div className="box" ref={boxEl} onClick={handleClick}></div>
    </div>
  );
}

export default ClickPosition;
