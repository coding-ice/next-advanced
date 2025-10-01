interface ArticleProps {
  params: Promise<{ slug: string }>;
}

const Article = async ({ params }: ArticleProps) => {
  const { slug } = await params;
  return <div>slug: {slug}</div>;
};

export default Article;
