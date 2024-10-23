import React, { cloneElement, useState } from 'react';

export type Element = ((hoverd: boolean) => React.ReactElement) | React.ReactElement;
function useHover(element: Element) {
  const [hoverd, setHoverd] = useState(false);

  const onMouseEnter = (originalOnMouseEnter: Function) => (e: any) => {
    originalOnMouseEnter?.(e);
    setHoverd(true);
  };

  const onMouseLeave = (originalOnMouseLeave: Function) => (e: any) => {
    originalOnMouseLeave?.(e);
    setHoverd(false);
  };

  if (typeof element === 'function') {
    element = element(hoverd);
  }

  const cloned = cloneElement(element, {
    onMouseEnter: onMouseEnter(element.props.onMouseEnter),
    onMouseLeave: onMouseLeave(element.props.onMouseLeave),
  });

  return [cloned, hoverd];
}

export default useHover;
