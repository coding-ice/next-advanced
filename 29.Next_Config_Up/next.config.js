/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/about",
        // /about/:slug -> /about/x (error: /about/x/y)
        // /about/:slug* -> /about/any
        headers: [
          {
            key: "ice-header",
            value: "166 ice",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/old-about/:path*", destination: "/about" },
      { source: "/docs/:path*", destination: "/:path*" },
      { source: "/link", destination: "https://www.bing.com" },
    ];
  },
};

module.exports = nextConfig;
