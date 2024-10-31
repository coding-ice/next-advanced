import Link from "next/link";

// 平行路由，当我访问 某一个 path 的时候，不仅仅是访问当前下的页面，还会访问其他的页面 当我 hard refresh 的时候，就会报错 404
export default function Layout({ children, home, shop }) {
  return (
    <html lang="en">
      <body>
        <Link href="/vistior">vistiors</Link>
        <br />
        {children}
        <br />
        parallel routes:
        {home}
        {shop}
      </body>
    </html>
  );
}
