exports.up = function(knex, Promise) {
  return knex.schema.createTable("events", event => {
    event.increments();

    event
    .string("name", 255)
    .notNullable()
    .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("events");
};
