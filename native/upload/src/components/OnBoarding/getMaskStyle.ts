import React from 'react';

export const getMaskStyle: (ele: HTMLElement, container: HTMLElement) => React.CSSProperties = (
  ele: HTMLElement,
  container: HTMLElement,
) => {
  if (!ele) return {};

  const { width, height, top, left } = ele.getBoundingClientRect();

  const elelemtTopWithScroll = top + container.scrollTop;
  const elelemtLeftWithScroll = left + container.scrollLeft;

  return {
    width,
    height,
    borderTopWidth: Math.max(0, elelemtTopWithScroll),
    borderBottomWidth: Math.max(0, container.scrollHeight - elelemtTopWithScroll - height),
    borderLeftWidth: Math.max(0, elelemtLeftWithScroll),
    borderRightWidth: Math.max(0, container.scrollWidth - elelemtLeftWithScroll - width),
  };
};
