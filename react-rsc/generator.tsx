import { readFile } from "fs/promises";
import React from "react";
import { renderJSXToHTML } from "./utils";

export async function htmlGenerator() {
  const author = "ice";
  let postContent = "";

  try {
    postContent = await readFile("./posts/hello.txt", "utf-8");
  } catch (error) {
    postContent = "Welcome to my blog!";
  }

  const jsx = (
    <div
      className="card"
      disabled={true}
      style={{ color: "red", fontSize: "14px" }}
    >
      Hello <span>World</span>!
    </div>
  );

  return renderJSXToHTML(jsx);
}
