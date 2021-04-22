const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const { firstNumber, secondNumber } = req.query;
  const sum = Number(firstNumber) + Number(secondNumber);

  res.json({ result: sum });
});

app.listen(3334, () => console.log("🚀 Server has started"));
