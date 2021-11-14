const express = require("express");
const app = express();
const port = 3000;

let hasError = false;
let statusResponse = 200;
const minutes = 2 * 60 * 1000;
setTimeout(() => {
  if (!hasError) {
    // demo for retry
    statusResponse = 500;
  }
}, minutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  console.log("healthcheck", req.hostname, statusResponse);
  res.status(statusResponse).send("Response");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
