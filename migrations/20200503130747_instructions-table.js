exports.up = async function (knex) {
  await knex.schema.createTable("instructions", (table) => {
    table.increments("id");
    table.text("step").notNull();
    table.integer("step_number").notNull().unsigned();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("instructions");
};
