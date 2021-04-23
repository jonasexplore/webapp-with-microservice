const axios = require("axios");

const api = axios.default.create({
  baseURL: "http://localhost:3333",
});

export default api;
