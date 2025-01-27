import { createContext, useContext, useState } from 'react';

interface IActx {
  value: number;
  setValue: (value: number) => void;
}
const Actx = createContext<IActx>({
  value: 0,
  setValue: () => {},
});

const AaaProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState(0);
  return <Actx.Provider value={{ value, setValue }}>{children}</Actx.Provider>;
};

const BCtx = createContext<IActx>({
  value: 0,
  setValue: () => {},
});

const BbbProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState(0);

  return <BCtx.Provider value={{ value, setValue }}>{children}</BCtx.Provider>;
};

const Aaa = () => {
  const { value, setValue } = useContext(Actx);

  console.log('aaa render');

  return (
    <div>
      A: {value}
      <button onClick={() => setValue(value + 1)}>+1</button>
    </div>
  );
};

const Bbb = () => {
  const { value, setValue } = useContext(BCtx);

  console.log('bbb render');

  return (
    <div>
      B: {value}
      <button onClick={() => setValue(value + 1)}>+1</button>
    </div>
  );
};

function App() {
  return (
    <AaaProvider>
      <BbbProvider>
        <Aaa />
        <Bbb />
      </BbbProvider>
    </AaaProvider>
  );
}

export default App;
