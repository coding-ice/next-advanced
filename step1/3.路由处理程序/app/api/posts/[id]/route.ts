import { NextRequest, NextResponse } from "next/server";

interface IParams {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: IParams) {
  const { id } = await params;
  const dataField = request.nextUrl.searchParams.get("dataField");

  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();
  return NextResponse.json(dataField ? { [dataField]: data[dataField] } : data);
}
