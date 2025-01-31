import { useRef, useState } from 'react';
import { createStyles } from 'antd-style';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface Item {
  color: string;
}

interface BoxProps {
  color: string;
}

const Container = () => {
  const [boxes, setBoxes] = useState<Item[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: 'box',
    drop: (item: Item) => {
      setBoxes(prev => [...prev, item]);
    },
  });

  drop(ref);

  return (
    <div className="container" ref={ref}>
      {boxes.map((box, index) => (
        <Box key={index} color={box.color} />
      ))}
    </div>
  );
};

const Box = ({ color }: BoxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: 'box',
    item: {
      color,
    },
    collect: nonitor => {
      console.log(nonitor);
      return { isDragging: nonitor.isDragging };
    },
  });

  drag(ref);

  return <div className="box" style={{ background: color }} ref={ref}></div>;
};

const useStyle = createStyles(({ css }) => {
  return {
    wrapper: css`
      .container {
        width: 300px;
        height: 300px;
        border: 1px solid black;
      }

      .box {
        width: 50px;
        height: 50px;
      }
    `,
  };
});

function App() {
  const { styles } = useStyle();

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.wrapper}>
        <Container />
        <Box color="pink" />
        <Box color="deeppink" />
        <Box color="green" />
      </div>
    </DndProvider>
  );
}

export default App;
