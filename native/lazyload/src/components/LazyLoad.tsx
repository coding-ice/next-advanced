import React, { useCallback, useEffect, useRef, useState } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
  placeholder?: React.ReactNode;
  offset?: number;
  onContentVisible?: () => void;
}

const LazyLoad = ({ children, placeholder, offset = 0 }: LazyLoadProps) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  const handleVisible = useCallback((entries: IntersectionObserverEntry[]) => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    }
  }, []);

  useEffect(() => {
    const o = new IntersectionObserver(handleVisible, {
      rootMargin: `${offset}px`,
      threshold: 0,
    });
    o.observe(containerRef.current!);

    return () => {
      o.unobserve(containerRef.current!);
    };
  }, [containerRef.current, handleVisible]);

  return (
    <div className="lazyload-wrapper" ref={containerRef}>
      {visible ? children : <div className="lazyload-placeholder">{placeholder}</div>}
    </div>
  );
};

export default LazyLoad;
