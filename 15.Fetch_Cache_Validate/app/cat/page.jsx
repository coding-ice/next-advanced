async function getData() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search", {
    next: {
      tags: ["cats"],
    },
  });
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

export default async () => {
  const data = await getData();

  return <img src={data[0].url} width={300} alt="" />;
};
