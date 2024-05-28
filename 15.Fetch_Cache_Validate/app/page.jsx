async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <p>{JSON.stringify(data)}</p>;
}
