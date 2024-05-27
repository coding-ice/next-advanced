import { cookies } from "next/headers";
// revalidate: 重新校验
// export const revalidate = 10

// 静态渲染
// export default async function Page() {
//   const url = (
//     await (await fetch("https://api.thecatapi.com/v1/images/search")).json()
//   )[0].url;

//   return <img src={url} width={300} alt="" />;
// }

// dynamic -> headers / searchParams (cache & headers 自动退出缓存)
export default async function Page({ searchParams }) {
  // const cookieStore = cookies();
  // const theme = cookieStore.get("theme");

  const url = (
    await (
      await fetch("https://api.thecatapi.com/v1/images/search", {
        cache: "no-store",
      })
    ).json()
  )[0].url;

  return (
    <>
      <img src={url} width={300} alt="" />
      <p>{JSON.stringify(searchParams)}</p>
      <p>{new Date().toLocaleTimeString()}</p>
    </>
  );
}
