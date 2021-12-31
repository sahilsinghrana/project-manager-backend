require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { sequelize } = require("./src/config/db");

const app = express();

const PORT = process.env.PORT || 9090;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
