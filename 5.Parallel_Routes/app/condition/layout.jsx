export default ({ children, login, profile }) => {
  const isLogin = false;
  return (
    <>
      {isLogin ? (
        <>
          {children}
          {profile}
        </>
      ) : (
        login
      )}
    </>
  );
};
