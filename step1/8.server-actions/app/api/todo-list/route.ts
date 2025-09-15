import { NextRequest, NextResponse } from "next/server";

const data = ["吃饭", "冥想", "打豆豆"];

export function GET() {
  return NextResponse.json({ data });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const result = formData.get("key") as string;
  data.push(result);
  return NextResponse.json({ data });
}
