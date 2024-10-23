import React, { memo, useEffect, useRef } from 'react';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => ({
  wrapper: css``,
}));

function getTotalOffsetTop(el: HTMLElement | null): number {
  let total = 0;

  // 跟链表类似
  while (el) {
    // 加上除了自身的边框
    if (total > 0) {
      total += el.clientTop;
    }
    total += el.offsetTop;
    el = el.offsetParent as HTMLElement;
  }

  return total;
}

// 如何获取某个元素，相对于视口的偏移量
const ElementOffset = memo(() => {
  const boxEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 某个页面：是否滚动到底部
    // window.addEventListener('scroll', () => {
    //   const scrolled = document.documentElement.clientHeight + window.scrollY;
    //   if (scrolled >= document.documentElement.scrollHeight) console.log(true);
    // });

    // console.log(boxEl.current?.offsetTop);
    // console.log(boxEl.current?.offsetParent);
    console.log(getTotalOffsetTop(boxEl.current));
  }, []);

  return (
    <div
      className="wrapper"
      style={{
        position: 'relative',
        margin: 100,
        padding: 200,
        border: '5px solid green',
        height: 1300,
      }}
    >
      <div
        ref={boxEl}
        className="box"
        style={{ padding: 20, border: '1px solid red', height: 200, background: 'pink' }}
      >
        box
      </div>
    </div>
  );
});

export default ElementOffset;
