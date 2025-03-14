const ReceipesController = require("express").Router();
const { getReceipes, getReceipeById, createReceipe, updateReceipe, deleteReceipe } = require("./receipes.routes");



ReceipesController.get("/", getReceipes);

ReceipesController.get("/receipe/:ReceipeId", getReceipeById);

ReceipesController.post("/createReceipe", createReceipe);

ReceipesController.patch("/updateReceipe/:ReceipeId", updateReceipe);

ReceipesController.delete("/deleteReceipe/:ReceipeId", deleteReceipe);

module.exports = ReceipesController;