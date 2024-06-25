export function generateStaticParams() {
  return [{ category: "shoes" }];
}

export default ({ children }) => {
  return (
    <>
      <h3>layout: 分类</h3>
      {children}
    </>
  );
};
