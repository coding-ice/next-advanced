import { useEffect, useRef } from 'react';

function useTimer(id: number, remove: (id: number) => void, duration = 2000) {
  const timer = useRef<number | null>(null);

  const removeTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };

  const startTimer = () => {
    timer.current = window.setTimeout(() => {
      remove(id);
      removeTimer();
    }, duration);
  };

  const onMouseEnter = () => {
    removeTimer();
  };

  const onMouseLeave = () => {
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return removeTimer;
  }, []);

  return {
    onMouseEnter,
    onMouseLeave,
  };
}

export default useTimer;
