import express from "express";
import bodyParser from "body-parser";

import index_router from "./routes/index_router";
import sequelize from "./db/db";
import check_token from "./auth/auth";

var app = express();

app.use(bodyParser({ extended: true }));

app.use(/\/((?!signup|login).)*/,check_token);

app.use("/", index_router);

sequelize.sync();

module.exports = app;

app.listen(3000);
