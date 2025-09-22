"use client";

import { useEffect } from "react";

export default function B() {
  console.log("b build");
  useEffect(() => {
    console.log("b");
  }, []);

  return <div>b</div>;
}
