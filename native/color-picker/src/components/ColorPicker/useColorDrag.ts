import { useEffect, useRef, useState } from 'react';

import { TransformOffset } from './Transform';

type EventType = MouseEvent | React.MouseEvent<Element, MouseEvent>;

type EventHandle = (event: EventType) => void;

interface ColorDragProps {
  offset?: TransformOffset;
  containerRef: React.RefObject<HTMLDivElement>;
  targetRef: React.RefObject<HTMLDivElement>;
  direction?: 'x' | 'y';
  onDragChange?: (offset: TransformOffset) => void;
}

function useColorDrag({ offset, containerRef, targetRef, direction, onDragChange }: ColorDragProps) {
  const [offsetValue, setOffsetValue] = useState(offset || { x: 0, y: 0 });

  const dragRef = useRef({
    flag: false,
  });

  // 进入的时候，先清除鼠标移动和鼠标抬起事件
  useEffect(() => {
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragStop);
  }, []);

  const updateOffset = (e: EventType) => {
    const scrollXOffset = document.documentElement.scrollLeft || document.body.scrollLeft;
    const scrollYOffset = document.documentElement.scrollTop || document.body.scrollTop;

    // 元素离viewport的距离 -> react 合成事件中不存在 clientX clientY
    const clientX = e.pageX - scrollXOffset;
    const clientY = e.pageY - scrollYOffset;

    const { width, height, x: rectX, y: rectY } = containerRef.current!.getBoundingClientRect();
    const { width: targetWidth, height: targetHeight } = targetRef.current!.getBoundingClientRect();

    // hander 小圆圈的半径
    const centerOffsetX = targetWidth / 2;
    const centerOffsetY = targetHeight / 2;

    const offsetX = Math.max(0, Math.min(clientX - rectX, width)) - centerOffsetX;
    const offsetY = Math.max(0, Math.min(clientY - rectY, height)) - centerOffsetY;

    const calcOffset = {
      x: offsetX,
      y: direction === 'x' ? offsetValue.y : offsetY,
    };

    setOffsetValue(calcOffset);
    onDragChange?.(calcOffset);
  };

  const onDragStop = () => {
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragStop);

    dragRef.current.flag = false;
  };

  const onDragMove: EventHandle = e => {
    e.preventDefault();
    updateOffset(e);
  };

  const onDragStart: EventHandle = () => {
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragStop);

    dragRef.current.flag = true;
  };

  return [offsetValue, onDragStart] as const;
}

export default useColorDrag;
