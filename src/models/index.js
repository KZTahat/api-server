"use strict";

const { Sequelize, DataTypes } = require('sequelize');
require("dotenv").config();
const POSTGRES_URI = process.env.POSTGRES_URI;
const food = require("./food.model.js");
const orders = require("./orders.model.js");
const Collection = require("./collection-class");

const sequelize = new Sequelize(POSTGRES_URI, {});

const foodModel = food(sequelize, DataTypes);
const orderModel = orders(sequelize, DataTypes);

foodModel.hasMany(orderModel, { sourceKey: "id", foreignKey: "foodId" });
orderModel.belongsTo(foodModel, { foreignKey: "foodId", targetKey: "id" });

const foodCollection = new Collection(foodModel);
const orderCollection = new Collection(orderModel);

module.exports = {
  dp: sequelize,
  Food: foodCollection,
  Order: orderCollection,
};
