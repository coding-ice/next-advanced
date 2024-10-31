import React, { useRef } from 'react';
import { createStyles } from 'antd-style';

import { Color } from './color';
import Handler from './Handler';
import Transform from './Transform';
import useColorDrag from './useColorDrag';
import { calcColor, calcOffset } from './utils';

const Palette = ({ color, onChange }: { color: Color; onChange: (color: Color) => void }) => {
  const transformRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [offsetValue, onDragStart] = useColorDrag({
    containerRef,
    targetRef: transformRef,
    onDragChange(offset) {
      const newColor = calcColor({ offset, containerRef, targetRef: transformRef, color });
      onChange(newColor);
    },
    calculate() {
      return calcOffset({ color, containerRef, targetRef: transformRef });
    },
  });

  return (
    <div ref={containerRef} className="color-picker-panel-palette" onMouseDown={onDragStart}>
      <Transform offset={offsetValue}>
        <Handler ref={transformRef} color={color.toRgbString()} />
      </Transform>
      <div
        className="color-picker-panel-palette-main"
        style={{
          backgroundColor: `hsl(${color.toHsl().h}, 100%, 50%)`,
          // 横向 / 纵向 的渐变色
          backgroundImage:
            'linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))',
        }}
      />
    </div>
  );
};

export default Palette;
