import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button, Flex, Popover, type PopoverProps } from 'antd';

import Mask from './OnBoarding/Mask';

export interface OnBoardingStepConfig {
  selector: () => HTMLElement | null;
  placement?: PopoverProps['placement'];
  renderContent?: (curStep: number) => React.ReactNode;
  beforeForward?: (curStep: number) => void;
  beforeBack?: (curStep: number) => void;
}

export interface OnBoardingProps {
  step?: number;
  steps: OnBoardingStepConfig[];
  getContainer?: () => HTMLElement;
  onStepsEnd?: () => void;
}

const OnBoarding: React.FC<OnBoardingProps> = ({ steps, getContainer, onStepsEnd, step = 0 }) => {
  const [curStep, setCurStep] = useState(step);
  const [, setForceRender] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    setForceRender(true);
  }, []);

  const container = getContainer?.() || document.documentElement;

  const getCurStep = () => {
    return steps[curStep];
  };
  const { beforeForward, beforeBack, renderContent, selector } = getCurStep();
  const selectedElement = selector()!;

  if (!selectedElement || isFinish) {
    return null;
  }

  const forward = () => {
    if (curStep === steps.length - 1) {
      onStepsEnd?.();
      setIsFinish(true);
      return;
    }

    beforeForward?.(curStep);
    setCurStep(curStep + 1);
  };

  const back = () => {
    if (curStep === 0) return;

    beforeBack?.(curStep);
    setCurStep(curStep - 1);
  };

  const renderPopover = (wrapper: React.ReactNode) => {
    const content = renderContent ? renderContent(curStep) : null;

    const operation = (
      <Flex justify="flex-end" className="popover-footer">
        {curStep > 0 && <Button onClick={back}>上一步</Button>}
        <Button onClick={forward}>{curStep === steps.length - 1 ? '完成' : '下一步'}</Button>
      </Flex>
    );

    return (
      <Popover
        content={
          <>
            {content}
            {operation}
          </>
        }
      >
        {wrapper}
      </Popover>
    );
  };

  const mask = <Mask ele={selectedElement} container={container} renderMaskContent={renderPopover} />;

  return createPortal(mask, container);
};

export default OnBoarding;
