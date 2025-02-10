"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await prisma.post.create({
    data: {
      title,
      content,
      authorId: 1,
    },
  });

  revalidatePath("/posts");
  redirect("/posts");
}

export default createPost;
