require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./src/db/index");

const app = express();

const PORT = process.env.PORT || 9090;

app.use(express.json());
app.use(cors());

db.authenticate()
  .then(() => {
    console.log(`Connection has been established successfully.`.green);
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
