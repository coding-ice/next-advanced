import { useEffect, useState } from 'react';

// 3. createState就是 create 传递的函数
const createStore = createState => {
  let state;
  const listeners = new Set<Function>();

  const setState = (partial, replace) => {
    const nextState = typeof partial === 'function' ? partial(state) : partial;

    if (!Object.is(nextState, state)) {
      const previousState = state;

      // 不是替换 ？ 合并 ：替换
      if (!replace) {
        state = typeof nextState !== 'object' || nextState === null ? nextState : Object.assign({}, state, nextState);
      } else {
        state = nextState;
      }
      listeners.forEach(listener => listener(state, previousState));
    }
  };

  const getState = () => state;

  const subscribe = listener => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const destroy = () => {
    listeners.clear();
  };

  const api = { setState, getState, subscribe, destroy };

  state = createState(setState, getState, api); // ({count: 0, increment: () => {}}) -> 当我调用 increment 的时候，会调用 setState

  return api;
};

function useStore(api, selector) {
  const [, forceRender] = useState(0);

  useEffect(() => {
    api.subscribe((state, prevState) => {
      const newObj = selector(state);
      const oldobj = selector(prevState);

      if (newObj !== oldobj) {
        forceRender(Math.random());
      }
    });
  }, []);
  
  return selector(api.getState());
}

// 1. 调用 create 函数
export const create = createState => {
  // 2. 调用 createStore 函数
  const api = createStore(createState);

  const useBoundStore = selector => useStore(api, selector);

  Object.assign(useBoundStore, api);

  return useBoundStore;
};
