// 缓存
// export async function GET() {
//   console.log("GET /api/time");
//   return Response.json({ data: new Date().toLocaleTimeString() });
// }

// 动态：用到了searchParams
// export async function GET(request) {
//   const searchParams = request.nextUrl.searchParams;
//   return Response.json({
//     date: new Date().toLocaleTimeString(),
//     params: searchParams.toString(),
//   });
// }

/*
  cookies/headers 只有请求的时候才知道具体的指
  所以是动态的
*/

// export async function GET(req) {
//   const token = req.cookies.get("token");

//   return Response.json({
//     date: new Date().toLocaleTimeString(),
//   });
// }

// 强制动态 -> 退出缓存
// export const dynamic = "force-dynamic";
// export async function GET() {
//   return Response.json({ data: new Date().toLocaleTimeString() });
// }

// 没测试出 缓存时间为10s， first >10s 刷新缓存（得到的还是缓存） sec latest
export const revalidate = 10
export async function GET() {
  return Response.json({
    date: new Date().toLocaleTimeString(),
  });
}

export async function POST() {
  return Response.json({
    date: new Date().toLocaleTimeString(),
  });
}
