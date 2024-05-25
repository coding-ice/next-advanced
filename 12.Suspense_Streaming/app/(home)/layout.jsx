import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <Link href="/about">about</Link>
        <Link href="/settings">setting</Link>
        <Link href="/team">team</Link>
      </nav>
      <div
        className="body"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 300,
          height: 300,
          background: "pink",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
