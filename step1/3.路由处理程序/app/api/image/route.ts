import { NextResponse } from "next/server";

export async function GET() {
  const data = await fetch("https://api.thecatapi.com/v1/images/search");
  const json = await data.json();
  return NextResponse.json(json);
}
