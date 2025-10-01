import type { NextConfig } from "next";

// import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";

// const nextConfig = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {};
//   }

//   return {};
// };

// export default nextConfig;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "x-custom-header",
            value: "ice",
          },
        ],
      },
      {
        source: "/about/:id",
        headers: [
          {
            key: "about-:id",
            value: ":id",
          },
        ],
      },
    ];
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/news/:id",
  //       destination: "/about/:id",
  //       permanent: true,
  //     },
  //     {
  //       source: "/about/:id",
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ];
  // },
  async rewrites() {
    return [
      // 路径还是/about/:id，但是内容会重写为 /
      {
        source: "/about/:id",
        destination: "/",
      },
      {
        source: "/api/todos",
        destination: "https://jsonplaceholder.typicode.com/todos",
      },
    ];
  },
};

export default nextConfig;
