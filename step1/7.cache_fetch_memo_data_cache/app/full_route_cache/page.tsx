async function getData() {
  const result = await fetch("https://api.thecatapi.com/v1/images/search", {
    // 强制缓存
    cache: "force-cache",
  });
  return await result.json();
}

// 采用动态渲染 -> 缓存：HTML / RSC pyload
export const dynamic = "force-dynamic";

async function Page() {
  const [data] = await getData();

  return (
    <div>
      <h2>{new Date().toLocaleTimeString()}</h2>
      <h4>{data.id}</h4>
      <img src={data.url} style={{ width: 400 }} />
    </div>
  );
}

export default Page;
