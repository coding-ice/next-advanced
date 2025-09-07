// 接受一个函数，返回一个已经记忆化的函数，
const cacheMap = new Map();

function cache(fn: Function) {
  return function (x) {
    if (cacheMap.has(x)) {
      return cacheMap.get(x);
    }

    const result = fn(x);
    cacheMap.set(x, result);

    return result;
  };
}

function oneAddX(x: number) {
  console.log("called");
  return 1 + x;
}

export const cached = cache(oneAddX);
