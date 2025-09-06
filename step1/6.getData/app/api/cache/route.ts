import { NextResponse } from "next/server";

// 路由处理程序已经不会缓存，next15 已经不在缓存
export async function GET() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return NextResponse.json({
    data,
  });
}
