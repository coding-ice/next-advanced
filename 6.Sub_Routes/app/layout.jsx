import Link from 'next/link';

export default function RootLayout({ children, abc }) {
  return (
    <html>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/product">product</Link>
          <Link href="/service">service</Link>
        </nav>
        <h2>root layout</h2>
        {abc}
        {children}
      </body>
    </html>
  );
}
