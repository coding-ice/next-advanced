import { create } from './utils/iZustand';

interface IState {
  count: number;
}

interface IActions {
  increment: () => void;
}

const logMiddleware = fn => {
  function func(set, get, store) {
    function newSet(...args) {
      console.log('log');
      set(...args);
    }

    return fn(newSet, get, store);
  }

  return func;
};

const useCounter = create<IState & IActions>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}));

// const useCounter = create<IState & IActions>()(
//   logMiddleware(set => ({
//     count: 0,
//     increment: () => set(state => ({ count: state.count + 1 })),
//   })),
// );

export default useCounter;
