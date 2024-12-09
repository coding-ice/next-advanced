"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavigationEvents from "./NavigationEvents";

interface LayoutProps extends React.PropsWithChildren {}

/**
 * 1. 路由缓存
 * 2. 完整路由缓存
 */

// 静态渲染：它有路由缓存，也有完整路由缓存 （因为它是静态渲染，当 build 有些值已经随着产物打包到了源代码中） -> 静态的，打包就已经生成了
// 动态渲染：它有路由缓存，但没有完整路由缓存 （因为它是动态渲染，当 build 有些值是在运行时才会被计算出来的） -> 运行时

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <html>
      <body>
        <Link href="/about">about</Link>
        <Link href="/setting">setting</Link>
        {/* <button
          onClick={() => {
            router.push("/about");
            router.refresh();
          }}
        >
          about
        </button>
        <button
          onClick={() => {
            router.push("/setting");
            router.refresh();
          }}
        >
          setting
        </button> */}
        {children}
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
      </body>
    </html>
  );
};

export default Layout;
