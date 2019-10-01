import express from "express";
import bodyParser from "body-parser";

import index_router from "./routes/index_router";
import sequelize from "./db/db";

var app = express();

app.use(bodyParser({ extended: true }));

app.use("/", index_router);

module.exports = app;

app.listen(3000);
