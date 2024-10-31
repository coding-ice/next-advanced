import { Color } from './color';
import { TransformOffset } from './Transform';

interface CalcColorProps {
  offset: TransformOffset;
  containerRef: React.RefObject<HTMLDivElement>;
  targetRef: React.RefObject<HTMLDivElement>;
  color: Color;
}

export const calcColor = (props: CalcColorProps): Color => {
  const { offset, containerRef, targetRef, color } = props;

  const { width, height } = containerRef.current!.getBoundingClientRect();
  const { width: targetWidth, height: targetHeight } = targetRef.current!.getBoundingClientRect();

  const centerOffsetX = targetWidth / 2;
  const centerOffsetY = targetHeight / 2;

  const s = (offset.x + centerOffsetX) / width;
  const l = 1 - (offset.y + centerOffsetY) / height;
  const hsv = color.toHsv();

  return new Color({
    h: hsv.h,
    s: Math.max(0, Math.min(1, s)),
    v: l >= 1 ? 1 : l,
    a: hsv.a,
  });
};

interface CalcOffsetProps {
  containerRef: React.RefObject<HTMLDivElement>;
  targetRef: React.RefObject<HTMLDivElement>;
  color: Color;
}

export const calcOffset = ({ color, containerRef, targetRef }: CalcOffsetProps): TransformOffset => {
  const { width, height } = containerRef.current!.getBoundingClientRect();
  const { width: targetWidth, height: targetHeight } = targetRef.current!.getBoundingClientRect();

  const centerOffsetX = targetWidth / 2;
  const centerOffsetY = targetHeight / 2;
  const hsv = color.toHsv();

  return {
    x: hsv.s * width - centerOffsetX,
    y: (1 - hsv.v) * height - centerOffsetY,
  };
};
