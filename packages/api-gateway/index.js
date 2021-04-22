const express = require("express");
const axios = require("axios").default;
const app = express();

const apiSomarPath = "http://localhost:3334/";
const apiMultiplicarPath = "http://localhost:3335/";

const getSum = async ({ firstNumber, secondNumber }) => {
  try {
    const response = await axios.get(apiSomarPath, {
      params: { firstNumber, secondNumber },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const getMultiple = async ({ firstNumber, secondNumber }) => {
  try {
    const response = await axios.get(apiMultiplicarPath, {
      params: { firstNumber, secondNumber },
    });

    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

app.get("/somar", async (req, res) => {
  console.log(req.query);
  const numbers = req.query;

  const response = await getSum({ ...numbers });
  console.log(response);
  res.json({ data: response });
});
app.get("/multiplicar", async (req, res) => {
  const numbers = req.query;
  const response = await getMultiple({ ...numbers });

  res.json({ data: response });
});

app.listen(3333, () => console.log("🚀 Server has started"));
