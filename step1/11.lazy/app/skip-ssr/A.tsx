"use client";

import { useEffect } from "react";

export default function A() {
  console.log("a build");
  useEffect(() => {
    console.log("a");
  }, []);
  return <div>a</div>;
}
