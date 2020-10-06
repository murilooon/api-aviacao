const { onUpdateTrigger } = require('../../knexfile')

exports.up = function(knex) {
  return knex.schema.createTable('model', function(table) {
    table.increments('_id').primary();
    table.string('name').notNullable();
    table.integer('capacity').notNullable();
    table.integer('weight').notNullable();
    table.timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('model')))
}

exports.down = function(knex) {
  return knex.schema.dropTable('model');
}
