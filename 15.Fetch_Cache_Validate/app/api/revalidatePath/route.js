import { revalidatePath } from "next/cache";

export async function GET(request) {
  const path = request.nextUrl.searchParams.get("path");

  if (path) {
    // 重新验证这个path的路由
    revalidatePath(path);
    return Response.json({ revalidated: true, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}
