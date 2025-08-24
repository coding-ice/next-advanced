import { Metadata } from "next";

export const metadata: Metadata = {
  icons: "https://www.baidu.com/favicon.ico",
};

const RootLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <html>
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
};

export default RootLayout;
