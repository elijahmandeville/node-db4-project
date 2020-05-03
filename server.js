const express = require("express");
const db = require("./schemes/recipe-model");

const server = express();

server.use(express.json());

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "something went wrong",
  });
});

server.get("/", (req, res) => {
  res.json({
    message: "Welcome",
  });
});

server.get("/recipes", async (req, res, next) => {
  try {
    const recipes = await db.getRecipes();
    res.json(recipes);
  } catch (err) {
    next(err);
  }
});

server.get("/recipes/:id", async (req, res, next) => {
  try {
    const list = await db.getShoppingList(req.params.id);
    res.json(list);
  } catch (err) {
    next(err);
  }
});

server.get("/recipes/instructions/:id", async (req, res, next) => {
  try {
    const instructions = await db.getInstructions(req.params.id);
    res.json(instructions);
  } catch (err) {
    next(err);
  }
});

module.exports = server;
