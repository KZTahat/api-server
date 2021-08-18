"use strict";

module.exports = (req, res, next) => {
  const { name } = req.query;
  if (name) {
    res.status(200).send({
      name: name,
    });
    next();
  } else {
    next("there is no name in the requset");
  }
};
