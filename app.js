const express = require("express");
const bodyParser = require("body-parser");
const storage = require("node-persist");

var app = express();
var jsonParser = bodyParser.json();
storage.init();

app.get("/test", (req, res) => {
  res.send("Work bro work!!");
});

app.post("/student", jsonParser, async (req, res) => {
  const { student_id, student_name } = req.body;
  await storage.setItem(student_id, student_name);
  res.send("student added");
});

app.listen(5000, () => {
  console.log("server is running!");
});
