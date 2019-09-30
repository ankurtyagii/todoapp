import express from "express";
import bodyParser from "body-parser";

import index_router from "./routes/index_router";
import sequelize from "./db/db";

var app = express();

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use(bodyParser({ extended: true }));

app.use("/", index_router);

module.exports = app;

app.listen(5000);
