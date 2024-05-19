export default ({ data }) => {
  return (
    <ul>
      {data.map((d) => {
        return <li key={d.id}>{d.title}</li>;
      })}
    </ul>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
