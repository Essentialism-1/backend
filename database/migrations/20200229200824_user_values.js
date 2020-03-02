exports.up = function(knex) {
  return knex.schema.createTable("user_values", user_values => {
    user_values.increments();

    user_values
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");

    user_values
      .integer("values_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("values");

    user_values.text("description");

    user_values.integer("user_values_id").unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user_values");
};
