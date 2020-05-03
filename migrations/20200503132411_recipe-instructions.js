exports.up = async function (knex) {
  await knex.schema.createTable("recipe_instructions", (t) => {
    t.integer("recipe_id")
      .notNull()
      .unsigned()
      .references("id")
      .inTable("recipes");
    t.integer("instruction_id")
      .notNull()
      .unsigned()
      .references("id")
      .inTable("instructions");
    t.primary(["recipe_id", "instruction_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("recipe_instructions");
};
