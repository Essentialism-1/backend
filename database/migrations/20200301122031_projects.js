exports.up = function(knex) {
  return knex.schema.createTable("projects", projects => {
    projects.increments();

    projects.string("title", 128).notNullable();

    projects.text("body");

    projects
      .boolean("completed")
      .notNullable()
      .defaultTo(false);

    projects
      .integer("user_values_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("user_values");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
