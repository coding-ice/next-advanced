import  React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import MyApp from "./pages/index";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  const content = renderToString(<MyApp />);
  res.send(
    `<html> <head> <title>Tiny React SSR</title>   </head>   <body>  <div id='root'> ${content}  </div> <script src='/client.bundle.js'></script>   </body></html>`
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
