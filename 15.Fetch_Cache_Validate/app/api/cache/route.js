// 1. time revalidation

// 1.1 all fetch
// export const revalidate = 10;

export const revalidate = 0;
export const fetchCache = "force-cache";

export async function GET() {
  // 1.2 单个fetch请求
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    // next: { revalidate: 5 },
    next: {
      tags: ["cats"],
    },
  });

  const data = await res.json();
  return Response.json({ data });
}
