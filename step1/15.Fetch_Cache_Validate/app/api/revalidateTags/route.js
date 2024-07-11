import { revalidateTag } from "next/cache";

export const GET = (request) => {
  const tag = request.nextUrl.searchParams.get("tag");

  revalidateTag(tag);
  return Response.json({
    revalidated: true,
    now: Date.now(),
  });
};
