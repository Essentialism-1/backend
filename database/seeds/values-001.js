exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("values")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("values").insert([
        { value: "Athletic Ability" },
        { value: "Art and Literature" },
        { value: "Creativity" },
        { value: "Discovery" },
        { value: "Inventing" },
        { value: "Independence" },
        { value: "Kindness" },
        { value: "Generosity" },
        { value: "Living in the Moment" },
        { value: "Community" },
        { value: "Morality" },
        { value: "Environmentalism" },
        { value: "Relationships" },
        { value: "Humor" },
        { value: "Success" }
      ]);
    });
};
