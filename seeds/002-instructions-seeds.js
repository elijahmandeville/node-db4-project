exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        { step: "make the food", step_number: 1 },
        { step: "make the food better", step_number: 2 },
        { step: "make the food the best", step_number: 3 },
      ]);
    });
};
