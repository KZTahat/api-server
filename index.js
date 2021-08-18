"use strict";

const { start } = require("./src/server.js");
const { dp } = require("./src/models/index.js");
require("dotenv").config();

dp.sync()
  .then(() => {
    start(process.env.PORT);
  })
  .catch(console.error);
