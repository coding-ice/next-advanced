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
        {team}
        {children}
        {analysis}
      </body>
    </html>
  );
};

export default RootLayout;
