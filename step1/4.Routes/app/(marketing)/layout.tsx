const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div>
          <h1>Marketing Layout</h1>
          {children}
        </div>
      </body>
    </html>
  );
};

export default MarketingLayout;
