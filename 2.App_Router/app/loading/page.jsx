import { use } from 'react';

async function userData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { name: 'ice', age: 24 };
}
export default () => {
  const data = use(userData());
  // const data = await userData();
  return (
    <h3>
      data: {data.name} - {data.age}
    </h3>
  );
};
