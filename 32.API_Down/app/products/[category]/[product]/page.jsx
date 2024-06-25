export function generateStaticParams({ params: { catagory } }) {
  return [{ product: "1" }, { product: "2" }];
}

export default (props) => {
  console.log(props);
  return <h4>product: {JSON.stringify(props.params.product)}</h4>;
};
  