import { cached } from "../utils";

const HomePage = () => {
  console.log(cached(5));
  console.log(cached(5));
  return <div>HomePage</div>;
};

export default HomePage;
