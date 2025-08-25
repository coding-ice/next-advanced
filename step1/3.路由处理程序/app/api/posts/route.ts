import { NextResponse } from "next/server"

export async function GET() {
  const data = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const {userId} = await request.json()
  const data: any[] = await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)).json();
  return NextResponse.json(data.filter(item => item.userId === userId))
}