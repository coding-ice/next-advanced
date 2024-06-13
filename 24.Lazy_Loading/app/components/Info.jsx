const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async () => {
  await sleep(3000);

  return <div>111</div>;
};
