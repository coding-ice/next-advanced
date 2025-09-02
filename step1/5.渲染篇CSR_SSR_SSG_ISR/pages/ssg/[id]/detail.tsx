const Page = ({ post, num }) => {
  return (
    <>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <p>count: {num}</p>
    </>
  );
};

export default Page;

// 获取多个路径
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    paths: posts.slice(0, 5).map((post) => {
      return {
        params: {
          id: post.id.toString(),
        },
      };
    }),
    fallback: "blocking",
  };
};

const getNumber = (num: number) => Math.floor(Math.random() * num);

// 获取单个路径
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return {
    props: { post, num: getNumber(100) },
    revalidate: 10,
  };
};
