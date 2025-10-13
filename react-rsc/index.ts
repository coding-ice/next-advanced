import express from "express";
import { readFile } from "fs/promises";
import escapeHtml from "escape-html";
import { htmlGenerator } from "./generator";

const app = express();

app.get("/", async (req, res) => {
  try {
    const html = await htmlGenerator();
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3001, () => {
  console.log("Server is listening on http://localhost:3001");
});
