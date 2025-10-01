import getBlogs from "../actions/getBlogs";
import BlogLink from "./BlogLink";

const BlogLayout = async ({ children }: React.PropsWithChildren) => {
  const blogs = await getBlogs();

  return (
    <div>
      <h3>blog</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {blogs.map((i) => (
          <BlogLink key={i.slug} slug={i.slug} title={i.title} />
        ))}
      </div>
      {children}
    </div>
  );
};

export default BlogLayout;
