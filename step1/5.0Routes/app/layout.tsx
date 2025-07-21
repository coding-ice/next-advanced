interface RootLayoutProps {
  children: React.ReactNode;
  login: React.ReactNode;
  dashboard: React.ReactNode;
}

const RootLayout = ({ children, login, dashboard }: RootLayoutProps) => {
  const isLogin = false;

  return (
    <html>
      <body>
        {isLogin ? dashboard : login}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
