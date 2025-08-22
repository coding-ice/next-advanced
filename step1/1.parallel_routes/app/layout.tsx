import Link from "next/link";

const RootLayout = ({
  children,
  analysis,
  team,
}: {
  children: React.ReactNode;
  analysis: React.ReactNode;
  team: React.ReactNode;
}) => {
  return (
    <html>
      <body>
        <h1>root layout</h1>
        <Link href="/page-views">Page Views</Link> <br />
        <Link href="/visitors">Visitors</Link>
        {team}
        {children}
        {analysis}
      </body>
    </html>
  );
};

export default RootLayout;
