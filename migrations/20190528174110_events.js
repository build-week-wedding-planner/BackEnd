exports.up = function(knex, Promise) {
  return knex.schema.createTable("events", event => {
    event.increments();

    event
    .string("eventname", 255)
    .notNullable()
    .unique();
    event
    .string('date', 12).notNullable();
    event
    .string("description", 255).notNullable();
    event
    .string("location", 125).notNullable();
    event
    .string("theme", 125).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("events");
};
