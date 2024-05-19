export default ({ data }) => {
  return <p>{JSON.stringify(data)}</p>;
};

async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return { props: { data } };
}
