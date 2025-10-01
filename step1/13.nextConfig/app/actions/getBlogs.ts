async function getBlogs() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      slug: "article1",
      title: "文章1",
    },
    {
      slug: "article2",
      title: "文章2",
    },
    {
      slug: "article3",
      title: "文章3",
    },
  ];
}

export default getBlogs;
