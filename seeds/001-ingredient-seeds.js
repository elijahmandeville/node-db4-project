exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Dough", ingredient_quantity: 1 },
        { ingredient_name: "Cheese", ingredient_quantity: 4 },
        { ingredient_name: "Sauce", ingredient_quantity: 3 },
      ]);
    });
};
