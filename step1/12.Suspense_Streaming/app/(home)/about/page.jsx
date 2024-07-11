export default async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>about</div>;
};
