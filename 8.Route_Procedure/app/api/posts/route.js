import { NextResponse } from "next/server";

export async function GET(request) {
  console.log(request.nextUrl.pathname); // /api/posts
  console.log(request.nextUrl.searchParams); // /api/posts?name=ice
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return NextResponse.json({ data });
}

export async function POST(request) {
  const article = await request.json();

  return NextResponse.json(
    {
      id: Math.random(),
      data: article,
    },
    { status: 201 }
  );
}
