import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
// /api/param?name=ice
// export async function GET(req) {
//   const params = req.nextUrl.searchParams;
//   const query = params.get("name");

//   return Response.json({ query });
// }

// header
// export async function GET(req) {
//   const headersList = headers();
//   const referer = headersList.get("referer");

//   return new Response("hi ice", {
//     status: 200,
//     headers: {
//       referer: referer,
//       name: "ice",
//     },
//   });
// }

// export async function GET(req) {
//   redirect("https://www.baidu.com");
// }

// 获取json
// export async function POST(req) {
//   const data = await req.json();
//   return NextResponse.json({ data });
// }

// form data
// export async function POST(req) {
//   const formData = await req.formData();
//   const name = formData.get("name");
//   const email = formData.get("email");

//   return NextResponse.json({ name, email });
// }

// cors
export async function GET() {
  return new Response("hi ice", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
