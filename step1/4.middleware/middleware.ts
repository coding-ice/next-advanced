import { NextResponse } from "next/server";

function chain(functions, index = 0) {
  const current = functions[index];

  if (current) { // -> m1
    const next = chain(functions, index + 1);
    return current(next);
  }

  return () => NextResponse.next();
}

function withMiddleware1(middleware) {
  return async (request) => {
    console.log("middleware1 " + request.url);
    return middleware(request);
  };
}

function withMiddleware2(middleware) {
  return async (request) => {
    console.log("middleware2 " + request.url);
    return middleware(request);
  };
}

export default chain([withMiddleware1, withMiddleware2]);

export const config = {
  matcher: "/api/:path*",
};
