"use strict";

module.exports = (req, res, next) => {
  console.log("From Logger: ", req.method, req.path);

  next();
};
