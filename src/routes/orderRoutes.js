"use strict";

const { Order } = require("../models/index.js");
const express = require("express");
const router = express.Router();

router.get("/order", getAllOrder);
router.post("/order", createOrder);
router.get("/order/:id", getOrder);
router.put("/order/:id", UpdateOrder);
router.delete("/order/:id", deleteOrder);

async function getAllOrder(req, res) {
  let order = await Order.getAll();
  res.status(200).json(order);
}
async function createOrder(req, res) {
  let order = await Order.create(req.body);
  res.status(201).json(order);
}
async function getOrder(req, res) {
  let order = await Order.get(parseInt(req.params.id));
  res.status(200).json(order);
}
async function UpdateOrder(req, res) {
  let order = await Order.update(parseInt(req.params.id), req.body);
  res.status(200).json(order);
}
async function deleteOrder(req, res) {
  await Order.delete(parseInt(req.params.id));
  res.status(204).send("Deleted");
}

module.exports = router;
