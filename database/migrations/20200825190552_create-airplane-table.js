const { onUpdateTrigger } = require('../../knexfile')

exports.up = function(knex) {
  return knex.schema.createTable('airplane', function(table) {
    table.increments('_id').primary();
    table.integer('model_id').notNullable().references('_id').inTable('model');
    table.integer('serial_number').notNullable();
    table.timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('airplane')))
}

exports.down = function(knex) {
  return knex.schema.dropTable('airplane');
}
