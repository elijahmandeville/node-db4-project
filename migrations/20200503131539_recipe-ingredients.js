exports.up = async function (knex) {
  await knex.schema.createTable("recipe_ingredients", (t) => {
    t.integer("recipe_id")
      .notNull()
      .unsigned()
      .references("id")
      .inTable("recipes");
    t.integer("ingredient_id")
      .notNull()
      .unsigned()
      .references("id")
      .inTable("ingredients");
    t.primary(["recipe_id", "ingredient_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("recipe_ingredients");
};
