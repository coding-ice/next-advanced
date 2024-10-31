import React, { CSSProperties, useState } from 'react';
import { createStyles } from 'antd-style';

import { Color } from './color';
import { ColorType } from './interface';
import Palette from './Palette';

const useStyles = createStyles(({ css }) => ({
  wrapper: css`
    width: 300px;

    .color-picker {
      width: 300px;
      &-panel {
        &-palette {
          position: relative;
          min-height: 160px;

          &-main {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }

          &-handler {
            position: absolute;
            z-index: 1;
            box-sizing: border-box;
            width: 16px;
            height: 16px;
            border: 2px solid #fff;
            border-radius: 50%;
            box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0);
            &-sm {
              width: 12px;
              height: 12px;
            }
          }
        }
      }
    }
  `,
}));

export interface ColorPickerPanelProps {
  className?: string;
  style?: CSSProperties;
  value?: ColorType;
  onChange?: (value: ColorType) => void;
}

const ColorPickerPanel = ({ className, style, value, onChange }: ColorPickerPanelProps) => {
  const { styles, cx } = useStyles();

  const [colorValue, setColorValue] = useState(() => {
    if (value instanceof Color) {
      return value;
    }
    return new Color(value);
  });

  const onPaletteChange = (color: Color) => {
    setColorValue(color);
    onChange?.(color);
  };

  return (
    <div className={cx(styles.wrapper, 'color-picker', className)} style={style}>
      <div className="color-picker-panel">
        <Palette color={colorValue} onChange={onPaletteChange} />
      </div>
    </div>
  );
};

export default ColorPickerPanel;
