import Link from "next/link";

export default function Layout({ children, product, shop }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/">Home</Link>
          <Link href="/shoe">shoe</Link>
        </div>
        {children}
        <div>{product}</div>
        <div>{shop}</div>
      </body>
    </html>
  );
}
