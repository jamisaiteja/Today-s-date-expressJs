const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  response.send(`${d}-${m + 1}-${y}`);
});

module.exports = app;
