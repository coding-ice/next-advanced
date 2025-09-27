import MdxPage from "../mdx-page/page.mdx";
import TitlePage, { frontmatter } from "../title/page.mdx";

const HomePage = () => {
  console.log(frontmatter);

  return (
    <>
      <h3>hi mdx</h3>
      <div style={{ width: 300 }}>
        {" "}
        <MdxPage />
      </div>
      <hr />
      <TitlePage />
    </>
  );
};

export default HomePage;
