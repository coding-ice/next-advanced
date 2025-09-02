const Page = ({ post }) => {
  return (
    <>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  );
};

export default Page;

// 每次 build 的时候执行 单个 ssg
// const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   return {
//     props: { posts },
//   };
// };

// export { getStaticProps };

// 获取多个路径
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          id: post.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

// 获取单个路径
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return {
    props: { post },
  };
};
