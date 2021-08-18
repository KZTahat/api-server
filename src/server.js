"use strict";

const express = require("express");
const app = express();
const notFoundHandler = require("./handlers/404.js");
const internalErrorHandler = require("./handlers/500.js");
const loggerMiddelware = require("./middelwares/logger.js");
const foodRoutes = require("./routes/foodRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
app.use(express.json());

app.use(loggerMiddelware);
app.get("/", (req, res) => res.status(200).send("All Good"));
app.get("/bad", (req, res, next) => next('this is bad EP'));
app.use(foodRoutes);
app.use(orderRoutes);
app.use("*", notFoundHandler);
app.use(internalErrorHandler);

function start(port) {
  app.listen(port, () => console.log(`Listining On Port ${port}`));
}

module.exports = {
  start,
  app,
};
