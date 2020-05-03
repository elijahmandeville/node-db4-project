const db = require("../data/config");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("ingredients as i")
    .join("recipes as r", "r.id", "i.id")
    .select(["i.ingredient_quantity", "i.ingredient_name"])
    .where("i.id", id);
}

function getInstructions(recipe_id) {
  return db("recipes as r")
    .select(["i.step_number", "i.step"])
    .leftJoin("recipe_instructions as ri", "r.id", "ri.recipe_id")
    .leftJoin("instructions as i", "i.id", "ri.instruction_id");
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
