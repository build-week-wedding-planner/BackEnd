
exports.up = function(knex, Promise) {
    return knex.schema.createTable('events', events => {
        events.increments();
        
        events.string('eventname', 255).notNullable().unique();
        events.string('date', 255).notNullable();
        events.string('description', 255).notNullable();
        events.string('location', 255).notNullable();
        events.string('theme', 255).notNullable();
        events.string('vendors', 255).notNullable();
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('events');
};
