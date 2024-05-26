export default async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = (await res.json()).slice(0, 10);

  return (
    <ul>
      {data.map(({ id, title }) => {
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
};
