import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "ice",
    email: "1999iceweb@gmail.com",
    posts: {
      create: [
        {
          title: "Learn React",
          content: "This is React course.",
          published: true,
        },
        {
          title: "Learn Next.js",
          content: "This is Next.js course.",
          published: true,
        },
      ],
    },
  },
  {
    name: "huan",
    email: "huan@gmail.com",
    posts: {
      create: [
        {
          title: "Learn Prisma",
          content: "This is Prisma course.",
          published: true,
        },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
