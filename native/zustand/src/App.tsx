import { useA } from './hooks';
import useCounter from './useCounter';

const Aaa = () => {
  const { count, increment } = useCounter(state => state);
  useA(() => console.log('a'));

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>+1</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <Aaa />
    </div>
  );
}

export default App;
