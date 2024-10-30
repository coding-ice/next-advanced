import { Dispatch, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useClick, useDismiss, useFloating, useHover, useInteractions } from '@floating-ui/react';

import { Global } from './config/theme';
import Popover from '@/components/Popover';

function Floating() {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'right-end',
  });

  // const hover = useHover(context);
  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);

  return (
    <div style={{ margin: 200 }}>
      <button ref={refs.setReference} {...getReferenceProps()}>
        hi
      </button>
      {isOpen && (
        <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
          iceice
        </div>
      )}
    </div>
  );
}

// 支持这种写法，但是不建议
// let n = 1;
// const stateRef = useRef<[string, Dispatch<string>]>([]);

// if (true) {
//   stateRef.current = useState('a');
// }

function App() {
  return (
    <div style={{ height: 1000, margin: 30 }}>
      <Global />
      {/* <Popover /> */}
      <Popover
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 200,
          height: 40,
          background: 'pink',
        }}
        content={<div className="wrap">ice xxx</div>}
        placement="top"
        trigger="hover"
      >
        hover me
      </Popover>
    </div>
  );
}

export default App;
