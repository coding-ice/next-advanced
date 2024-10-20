import { useEffect, useState } from 'react';
import { merge } from 'lodash-es';

import { toNumber } from './utils';
import { WatermarkProps } from './Watermark';

export type WaterOptions = Omit<WatermarkProps, 'className' | 'style' | 'children'>;

const defaultOptions: WaterOptions = {
  rotate: -20,
  zIndex: 1,
  width: 100,
  gap: [100, 100],
  fontStyle: {
    fontSize: '16px',
    color: 'rgba(0, 0, 0, 0.15)',
    fontFamily: 'Arial',
    fontWeight: 'normal',
  },
  getContainer: () => document.body,
};

function getMergedOptions(o: WaterOptions) {
  const options = o || {};

  const mergedOptions = merge({}, defaultOptions, options);
  const { offset } = mergedOptions;

  const mergedOffsetX = toNumber(offset?.[0], 0);
  const mergedOffsetY = toNumber(offset?.[1], 0);
  mergedOptions.offset = [mergedOffsetX, mergedOffsetY];

  return mergedOptions;
}

function useWatermark(params: WaterOptions) {
  const [options, setOptions] = useState(params || {});
  const mergedOptions = getMergedOptions(options);

  function drawWatermark() {}

  useEffect(() => {
    drawWatermark();
  }, [options]);

  return {
    generateWatermark: (newOptions: WatermarkProps) => {
      setOptions(merge({}, options, newOptions));
    },
    destroy: () => {},
  };
}

export default useWatermark;
