import { NextResponse } from "next/server";

// export function middleware(request) {
//   return NextResponse.redirect(new URL("/home", request.url));
// }

// // 设置匹配路径
// // export const config = {
// //   matcher: "/about/:path*",
// // };

// export const config = {
//   matcher: ["/about/:path*", "/dashboard/:path*"],
// };

// 设置cookie

// export function middleware(request) {
//   let cookie = request.cookies.get("nextjs");
//   console.log(cookie);

//   const allCookies = request.cookies.getAll();
//   console.log(allCookies);

//   const response = NextResponse.next();
//   response.cookies.set("vercel", "fast");
//   response.cookies.set({
//     name: "vercel",
//     value: "fast",
//     path: "/",
//   });
//   cookie = response.cookies.get("vercel");
//   console.log(cookie);

//   return response;
// }

// 设置headers
// export function middleware(request) {
//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set("my-demo", "ice");

//   const response = NextResponse.next({
//     // request: {
//     //   headers: requestHeaders,
//     // },
//   });

//   response.headers.set("my-age", 24);

//   return response;
// }

// CORS
// export function middleware(request) {}



