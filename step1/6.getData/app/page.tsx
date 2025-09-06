async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
}

const HomePage = async () => {
  const data = await getData();

  return <div>{JSON.stringify(data)}</div>;
};

export default HomePage;
