// 不再是静态渲染 请求可以拿动态的值
export const fetchCache = "force-no-store";

async function getData() {
  // react有请求记忆 多次请求只会发送一次
  const { signal } = new AbortController();
  const res = await fetch("https://api.thecatapi.com/v1/images/search", {
    signal,
  });
  const data = await res.json();

  return data;
}

const Page = async () => {
  const [catData] = await getData();
  return (
    <>
      <h3>{catData.id}</h3>
      <img src={catData.url} alt="" />
      <CatDetail />
    </>
  );
};

async function CatDetail() {
  const [catData] = await getData();

  return (
    <>
      <h3>{catData.id}</h3>
      <img src={catData.url} alt="" />
    </>
  );
}

export default Page;
