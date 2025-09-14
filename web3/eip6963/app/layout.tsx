import WagmiProviderClient from "./WagmiProviderClient";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <WagmiProviderClient>{children}</WagmiProviderClient>
      </body>
    </html>
  );
};

export default RootLayout;
