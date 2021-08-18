"use strict";

const Food = (sequelize, DataTypes) =>
  sequelize.define("Food", {
    foodName: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    foodPrice: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
  });

module.exports = Food;