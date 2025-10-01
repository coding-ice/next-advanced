const HomePage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return <div>{JSON.stringify(data)}</div>;
};

export default HomePage;
