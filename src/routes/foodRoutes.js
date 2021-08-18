"use strict";

const { Food } = require("../models/index.js");
const express = require("express");
const router = express.Router();

router.get("/food", getAllFood);
router.post("/food", createFood);
router.get("/food/:id", getFood);
router.put("/food/:id", UpdateFood);
router.delete("/food/:id", deleteFood);

async function getAllFood(req, res) {
  try {
    let food = await Food.getAll();
    res.status(200).send(food);
  } catch (err) {
    console.log(`Error In Food Routes getAll ${err}`);
  }
}
async function createFood(req, res) {
  try {
    let meal = await Food.create(req.body);
    res.status(201).json(meal);
  } catch (err) {
    console.log(`Error In Food Routes Create ${err}`);
  }
}
async function getFood(req, res) {
  let meal = await Food.get(parseInt(req.params.id));
  res.status(200).json(meal);
}
async function UpdateFood(req, res) {
  let meal = await Food.update(parseInt(req.params.id), req.body);
  res.status(200).json(meal);
}
async function deleteFood(req, res) {
  await Food.delete(parseInt(req.params.id));
  res.status(204).send("Deleted");
}

module.exports = router;
