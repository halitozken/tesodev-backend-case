const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers");
const connectDabase = require("./helpers/database/connectDatabase");

const app = express();

app.use(express.json());

dotenv.config({
  path: "./config/env/config.env",
});

connectDabase();

app.listen(process.env.PORT, () => {
  console.log("Listening on port: " + process.env.PORT);
});

app.use("/api", routers);
