import { useA } from './hooks';
import useAAndB from './hooks/useAAndB';
import useCounter from './useCounter';

/**
 * 1. 取出值的时候，需要什么值，定义什么值 -> 不然会存在新能问题
 *  - 源码中也很好解释：两值相等，不更新，也就是其他组件不会渲染的原因
 * @returns
 */

// const Aaa = () => {
//   const { count, increment } = useCounter(state => state);
//   useA(() => console.log('a'));

//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={increment}>+1</button>
//     </div>
//   );
// };

const A = () => {
  const a = useAAndB(state => state.a);
  const setA = useAAndB(state => state.setA);

  console.log('A render');

  return (
    <div>
      a: {a}
      <button onClick={() => setA()}>+1</button>
    </div>
  );
};

const B = () => {
  const b = useAAndB(state => state.b);
  const setB = useAAndB(state => state.setB);

  return (
    <div>
      b: {b}
      <button onClick={() => setB()}>+1</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <A />
      <B />
    </div>
  );
}

export default App;
