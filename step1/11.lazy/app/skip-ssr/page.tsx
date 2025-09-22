"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// 导入命名组件，需要 then(mod => mod.A)
const APage = dynamic(() => import("./A"));
const BPage = dynamic(() => import("./B"));
const CPage = dynamic(() => import("./C"), {
  ssr: false,
});

const SkipSSRPage = () => {
  const [showB, setShowB] = useState(false);
  return (
    <div>
      <button onClick={() => setShowB(!showB)}>show b</button>
      <APage />
      {showB && <BPage />}
      <CPage />
    </div>
  );
};

export default SkipSSRPage;
