// 如果定义了平行路由，单纯的刷新页面，
// 平行路由：@abc > product
// app > product 都会进行匹配
// 不定义default就会404
export default () => {
  return <h3>hi App!</h3>;
};
