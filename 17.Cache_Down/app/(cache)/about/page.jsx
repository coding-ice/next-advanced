const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const dynamic = "force-dynamic";

export default async () => {
  await sleep(3000);

  return <h3>about:{new Date().toLocaleString()}</h3>;
};
