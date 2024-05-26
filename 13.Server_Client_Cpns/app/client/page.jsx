"use client";

console.log("client");

import { useState } from "react";

export default () => {
  console.log("client page");

  const [text, setText] = useState("init text");

  return <button onClick={() => setText("change text")}>{text}</button>;
};
