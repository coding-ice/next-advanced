import dynamic from "next/dynamic";

const Info = dynamic(() => import("../components/Info"), {
  loading: () => <p>Loading...</p>,
});
export default () => {
  return (
    <>
      <h3>Home</h3>
      <Info />
    </>
  );
};
