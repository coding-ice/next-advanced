import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// 刷新缓存

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");
  if (path) {
    revalidatePath(path);
    return NextResponse.json({ message: "Path revalidated" });
  }

  return NextResponse.json({ message: "Path not found" });
}
