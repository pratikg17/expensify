import app from "./api/app.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";
// const path = require("path");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT || 9000;

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API running");
//   });
// }

// Start the server
app.listen(port, () => {
  console.log(`Server running at ${port}.`);
});
