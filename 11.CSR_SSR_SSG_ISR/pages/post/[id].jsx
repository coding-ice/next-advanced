// SSG
// export default ({ post }) => {
//   return (
//     <>
//       <header>{post.title}</header>
//       <main>{post.body}</main>
//     </>
//   );
// };

// export async function getStaticPaths() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();
//   const paths = posts.map((p) => ({ params: { id: String(p.id) } }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   );
//   const post = await res.json();

//   return { props: { post } };
// }


// ISR
export default ({ post }) => {
  return (
    <>
      <header>{post.title}</header>
      <main>{post.body}</main>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.slice(0, 10).map((p) => {
    return {
      params: {
        id: String(p.id),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${getRandomInt(100)}`
  );
  const post = await res.json();

  return {
    props: {
      post,
      revalidate: 10,
    },
  };
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
