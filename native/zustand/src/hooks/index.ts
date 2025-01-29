import { useEffect } from 'react';

export const useB = selector => {
  useEffect(() => {
    console.log('------ render b ------');
    selector();
  }, []);
};

export const useA = selector => useB(selector);
