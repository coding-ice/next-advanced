"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const A = dynamic(() => import("../components/A"));
const B = dynamic(() => import("../components/B"));
const C = dynamic(() => import("../components/C"), { ssr: false });

export default () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <A />
      <button onClick={() => setShow(true)}>toggle</button>
      {show && <B />}
      <C />
    </>
  );
};
