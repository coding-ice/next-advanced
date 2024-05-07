import { NextResponse } from "next/server";

// params.id -> [id]/route
export async function GET(request, { params }) {
  console.log(params);
  const field = request.nextUrl.searchParams.get("dataField");
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  ).json();
  const res = field ? { [field]: data[field] } : data;

  return NextResponse.json(res);
}
