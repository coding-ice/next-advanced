"use client";

import { useEffect } from "react";

export default function C() {
  console.log("c build");
  useEffect(() => {
    console.log("c");
  }, []);

  return <div>c</div>;
}
