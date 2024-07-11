import { Suspense } from "react";

const sleep = async (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export default () => {
  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Weatcher />
      </Suspense>
      <Suspense fallback={<h2>loading...</h2>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<h2>loading...</h2>}>
        <Recommend />
      </Suspense>
    </>
  );
};

async function Weatcher() {
  await sleep(3000);
  return <h2>weatcher</h2>;
}

async function PostFeed() {
  await sleep(5000);
  return <h2>PostFeed</h2>;
}
async function Recommend() {
  await sleep(10000);
  return <h2>PostFeed</h2>;
}
