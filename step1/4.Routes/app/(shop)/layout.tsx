const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div>
          <h1>Shop Layout</h1>
          {children}
        </div>
      </body>
    </html>
  );
};

export default ShopLayout;
