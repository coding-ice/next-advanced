const Page = ({ data }) => {
  return "ssr";
  // return <div>{JSON.stringify(data)}</div>;
};

// 每次请求的时候执行
// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();

//   return {
//     props: { data },
//   };
// }

export default Page;
