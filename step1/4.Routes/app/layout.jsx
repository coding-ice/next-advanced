export default function Layout({ children, login, profile }) {
  const isLogin = true;
  return (
    <html lang="en">
      <body>
        {isLogin ? children : login}
        {/* {login}
        {profile} */}
      </body>
    </html>
  );
}
