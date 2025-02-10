import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

interface PostProps {
  params: {
    id: string;
  };
}

const Post: React.FC<PostProps> = async ({ params }) => {
  const { id } = params;

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      author: true,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <article className="max-w-2xl space-y-4 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">{post.title}</h1>
        <p className="text-gray-600 text-center">by {post.author.name}</p>
        <div className="prose prose-gray mt-8">
          {post.content || "No content available."}
        </div>
      </article>
    </div>
  );
};

export default Post;
