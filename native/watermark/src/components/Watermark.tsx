import React, { useCallback, useEffect, useRef } from 'react';
import { createStyles } from 'antd-style';

import useWatermark from './useWatermark';

export interface WatermarkProps extends React.PropsWithChildren {
  style?: React.CSSProperties;
  className?: string;
  zIndex?: string | number;
  width?: number; // w
  height?: number; // w
  rotate?: number; // w
  image?: string;
  content?: string | string[];
  fontStyle?: {
    color?: string;
    fontFamily?: string;
    fontSize?: number | string;
    fontWeight?: number | string;
  };
  gap?: [number, number]; // w
  offset?: [number, number]; // w
  getContainer?: () => HTMLElement;
}

const useStyles = createStyles(({ css }) => ({
  wrapper: css``,
}));

const Watermark = (props: WatermarkProps) => {
  const { style, className, children, zIndex, width, height, rotate, image, content, fontStyle, gap, offset } = props;
  const { styles } = useStyles();

  const containerRef = useRef(null);

  const getContainer = useCallback(() => {
    if (typeof props.getContainer === 'function') {
      return props.getContainer();
    }
    return containerRef.current!;
  }, [containerRef.current, props.getContainer]);

  const { generateWatermark } = useWatermark({
    zIndex,
    width,
    height,
    rotate,
    image,
    content,
    fontStyle,
    gap,
    offset,
    getContainer,
  });

  useEffect(() => {
    generateWatermark({
      zIndex,
      width,
      height,
      rotate,
      image,
      content,
      fontStyle,
      gap,
      offset,
      getContainer,
    });
  }, [
    zIndex,
    width,
    height,
    rotate,
    image,
    content,
    JSON.stringify(props.fontStyle),
    JSON.stringify(props.gap),
    JSON.stringify(props.offset),
    getContainer,
  ]);

  return (
    children && (
      <div ref={containerRef} style={style} className={className}>
        {children}
      </div>
    )
  );
};

export default Watermark;
