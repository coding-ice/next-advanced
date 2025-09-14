"use client";

import { useEffect, useState } from "react";

interface EIP6963ProviderInfo {
  uuid: string;
  name: string;
  icon: string;
  rdns: string;
}

interface EIP6963ProviderDetail {
  info: EIP6963ProviderInfo;
  provider: any; // eip1913 provider
}

const HomePage = () => {
  const [wallets, setWallets] = useState([]);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const handleAnnounce = (event: CustomEvent<EIP6963ProviderDetail>) => {
      const { info, provider } = event.detail;
      setWallets((prev) => {
        if (prev.some((item) => item.info.uuid === info.uuid)) {
          return prev;
        }
        return [...prev, { info, provider }];
      });
    };

    /** 先监听，后发送*/

    // 1. 先监听 announceProvider 事件
    window.addEventListener("eip6963:announceProvider", handleAnnounce);

    // 2. 在发送 requestProvider 请求
    window.dispatchEvent(new CustomEvent("eip6963:requestProvider")); // 钱包内部会监听这个事件，并发送 announceProvider 事件 （同步的）

    return () => {
      window.removeEventListener("eip6963:announceProvider", handleAnnounce);
    };
  }, []);

  return (
    <div>
      wallets:
      <ul>
        {wallets.map((wallet) => (
          <li key={wallet.info.uuid}>
            {wallet.info.name}{" "}
            <button
              onClick={() => {
                wallet.provider
                  .request({
                    method: "eth_requestAccounts",
                  })
                  .then((accounts) => {
                    setAddress(accounts[0]);
                  });
              }}
            >
              connect
            </button>
          </li>
        ))}
      </ul>
      <h3>address: {address}</h3>
    </div>
  );
};

export default HomePage;
