import { NextResponse } from "next/server";

const data = ["吃饭", "睡觉", "写代码"];

export function GET() {
  return NextResponse.json({
    data,
  });
}

export async function POST(request) {
  const res = await request.formData();
  console.log(res);

  return NextResponse.json({
    data,
  });
}
