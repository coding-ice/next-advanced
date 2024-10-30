import React, { CSSProperties, PropsWithChildren, ReactNode, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  arrow,
  flip,
  FloatingArrow,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
} from '@floating-ui/react';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => ({
  wrapper: css``,
}));

type Alignment = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;

interface PopoverProps extends PropsWithChildren {
  content: ReactNode;
  trigger?: 'hover' | 'click';
  placement?: Side | AlignedPlacement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
}

const Popover = ({
  open,
  content,
  className,
  style,
  onOpenChange,
  trigger = 'hover',
  placement = 'bottom',
  children,
}: PopoverProps) => {
  const { styles, cx } = useStyles();
  const [isOpen, setIsOpen] = useState(open);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange(open) {
      setIsOpen(open);
      onOpenChange?.(open);
    },
    placement,
    middleware: [
      offset(10),
      flip(),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const dismiss = useDismiss(context);
  const interaction = trigger === 'hover' ? useHover(context) : useClick(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([interaction, dismiss]);

  const el = useMemo(() => {
    const divEl = document.createElement('div');
    divEl.className = 'popover-wrap';
    document.body.appendChild(divEl);
    return divEl;
  }, []);

  const popover = isOpen && (
    <div ref={refs.setFloating} className="popover" style={floatingStyles} {...getFloatingProps()}>
      <FloatingArrow ref={arrowRef} context={context} />
      {content}
    </div>
  );

  return (
    <>
      <div className={cx(styles.wrapper, className)} style={style} ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      {createPortal(popover, el)}
    </>
  );
};

export default Popover;
