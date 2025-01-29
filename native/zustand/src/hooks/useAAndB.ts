import { create } from 'zustand';

interface State {
  a: number;
  b: number;
  setA: () => void;
  setB: () => void;
}

const useAAndB = create<State>(set => ({
  a: 0,
  b: 0,
  setA: () => set(state => ({ a: state.a + 1 })),
  setB: () => set(state => ({ b: state.b + 1 })),
}));

export default useAAndB;
