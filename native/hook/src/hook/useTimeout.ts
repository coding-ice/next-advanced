import { useEffect, useRef } from 'react';

function useLatest<T>(val: T) {
  const ref = useRef(val);
  ref.current = val;
  return ref;
}

function useTimeout(fn: Function, delay: number = 300) {
  const latestFn = useLatest(fn);

  useEffect(() => {
    let timer = setTimeout(() => {
      latestFn.current();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);
}

export default useTimeout;
