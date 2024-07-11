async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return data;
}

export default async function Page() {
  const data = await getData();
  return (
    <>
      <h1>Hello Next.js! {process.env.customKey}</h1>
      <ul>
        {data.map((i) => (
          <li key={i.title}>{i.title}</li>
        ))}
      </ul>
    </>
  );
}
