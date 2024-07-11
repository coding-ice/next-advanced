export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return data;
}

export default async () => {
  const data = await getData();
  console.log(data);

  return <div>fetch</div>;
};
