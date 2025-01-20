import { useEffect, useState } from 'react';
import { createStyles, cx } from 'antd-style';

import { getMaskStyle } from './getMaskStyle';

interface MaskProps {
  ele: HTMLElement; // 需要遮罩的元素
  container?: HTMLElement;
  renderMaskContent?: (wrapper: React.ReactNode) => React.ReactNode;
}

const useStyle = createStyles(({ css }) => ({
  mask: css`
    position: absolute;
    left: 0;
    top: 0;

    z-index: 999;

    border-style: solid;
    border-color: rgba(0, 0, 0, 0.4);

    transition: all 0.2s ease-in-out;

    .mask-content {
      width: 100%;
      height: 100%;
    }
  `,
}));

const Mask: React.FC<MaskProps> = ({ ele, container, renderMaskContent }) => {
  const [style, setStyle] = useState<React.CSSProperties>({});
  const { styles } = useStyle();

  useEffect(() => {
    if (!ele) return;

    ele.scrollIntoView({
      block: 'center',
      inline: 'center',
    });

    const style = getMaskStyle(ele, container || document.documentElement);
    setStyle(style);
  }, [ele, container]);

  const getContent = () => {
    if (!renderMaskContent) {
      return null;
    }

    return renderMaskContent(<div className="mask-content" />);
  };

  return (
    <div className={cx(styles.mask)} style={style}>
      {getContent()}
    </div>
  );
};

export default Mask;
