async function getData() {
  // 取消 react 的请求记忆，在服务端 React 组件树中，多次请求只会发起一次请求
  const { signal } = new AbortController();
  const result = await fetch("https://api.thecatapi.com/v1/images/search", {
    signal,
    // 取消数据缓存
    cache: "no-store",
  });
  return await result.json();
}

const HomePage = async () => {
  const [data] = await getData();

  return (
    <div>
      hi
      {/* <h2>{new Date().toLocaleTimeString()}</h2>
      <h3>{data.id}</h3>
      <img style={{ width: 300 }} src={data.url} alt="cat" />
      <hr />
      <ImgCache /> */}
    </div>
  );
};

const ImgCache = async () => {
  const [data] = await getData();

  return (
    <>
      <h3>{data.id}</h3>
      <img style={{ width: 300 }} src={data.url} alt="cat" />
    </>
  );
};

export default HomePage;
