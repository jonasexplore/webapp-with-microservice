const express = require("express");

const app = express();

app.use(express.json());

app.get("/status", (req, res) => {
  res.json("checked");
});

app.get("/", (req, res) => {
  const { firstNumber, secondNumber } = req.query;
  const multiple = Number(firstNumber) * Number(secondNumber);
  res.json(multiple);
});

app.listen(3335, () => console.log("🚀 Server has started."));
