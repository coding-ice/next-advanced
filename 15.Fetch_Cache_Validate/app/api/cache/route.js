// 1. time revalidation

// 1.1 all fetch
export const revalidate = 10;

export async function GET() {
  // 1.2 单个fetch请求
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: { revalidate: 5 },
  });

  const data = await res.json();
  return Response.json({ data });
}
