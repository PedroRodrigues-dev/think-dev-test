const express = require("express");
const app = express();
const users = require("../users.json");
module.exports = app;

//Example endpoint
app.get("/foo", (req, res) => {
  res.send(`foo`);
});

//Write your code here
app.get("/users", (req, res) => {
  const userId = req.query.id;
  const body = userId ? users.find((u) => u.id === userId) : users;

  res.json(body);
});
