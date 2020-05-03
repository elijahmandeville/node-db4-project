exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Mac and Cheese" },
        { recipe_name: "Pizza" },
        { recipe_name: "Water" },
      ]);
    });
};
