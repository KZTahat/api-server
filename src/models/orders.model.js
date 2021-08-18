"use strict";

const Order = (sequelize, DataTypes) =>
  sequelize.define("Order", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
    },
    foodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

module.exports = Order;
