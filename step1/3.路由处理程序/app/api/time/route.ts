import { NextResponse } from "next/server";

// nextjs 15 已经为动态渲染
export async function GET() {
  console.log("GET /api/time");
  return Response.json({ data: Date.now() });
}

// 退出缓存的办法：
/**
 * 1. dynamic = force-dynamic
 * 2. revalidate = 10 -> 10s 后命中缓存 / 之后再刷新就是最新的值
 */