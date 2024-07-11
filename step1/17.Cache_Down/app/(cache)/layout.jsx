"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavigationEvents from "../../utils/NavigationEvents";
import { Suspense } from "react";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <html>
      <body>
        <nav>
          <button
            onClick={() => {
              router.push("/about");
              // router.refresh();
            }}
          >
            about
          </button>
          <span style={{ padding: "0 20px" }}>|</span>
          <button
            onClick={() => {
              router.push("/settings");
              // router.refresh();
            }}
          >
            settings
          </button>
        </nav>
        <div
          className="body"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 400,
            height: 400,
            background: "pink",
          }}
        >
          {children}
        </div>
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
      </body>
    </html>
  );
}
