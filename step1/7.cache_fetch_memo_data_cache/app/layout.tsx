import Link from "next/link";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        {children}
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/route_cache">Route Cache</Link>
          <Link href="/product">Product</Link>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
