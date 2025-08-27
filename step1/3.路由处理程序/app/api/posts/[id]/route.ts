import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  ctx: RouteContext<"/api/posts/[id]">
) {
  const { id } = await ctx.params;
  const dataField = request.nextUrl.searchParams.get("dataField");

  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();
  return NextResponse.json(dataField ? { [dataField]: data[dataField] } : data);
}
