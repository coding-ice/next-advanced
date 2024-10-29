import { useState } from 'react';
import { useClick, useDismiss, useFloating, useHover, useInteractions } from '@floating-ui/react';

import { Global } from './config/theme';

function Popover() {
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

function App() {
  return (
    <>
      <Global />
      <Popover />
    </>
  );
}

export default App;
