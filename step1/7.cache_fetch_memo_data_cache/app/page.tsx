// 改为动态渲染，取消 nextjs 的数据缓存
export const dynamic = "force-dynamic";

async function getData() {
  const { signal } = new AbortController();
  // 取消 react 的请求记忆
  const result = await fetch("https://api.thecatapi.com/v1/images/search", {
    signal,
  });
  return await result.json();
}

const HomePage = async () => {
  const res = await getData();
  const data = res[0];

  return (
    <div>
      <h3>{data.id}</h3>
      <img style={{ width: 300 }} src={data.url} alt="cat" />
      <hr />
      <ImgCache />
    </div>
  );
};

const ImgCache = async () => {
  const res = await getData();
  const data = res[0];

  return (
    <>
      <h3>{data.id}</h3>
      <img style={{ width: 300 }} src={data.url} alt="cat" />
    </>
  );
};

export default HomePage;
