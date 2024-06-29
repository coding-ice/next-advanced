// App -> Page
// generateStaticParams -> getStaticPaths
export function generateStaticParams() {
  return [{ id: "1", id: "2" }];
}

export default ({ params }) => {
  return <div>gen: {params.id}</div>;
};
