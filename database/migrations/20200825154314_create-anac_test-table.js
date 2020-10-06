const { onUpdateTrigger } = require('../../knexfile')

exports.up = function(knex) {
  return knex.schema.createTable('anac_test', function(table) {
    table.increments('_id').primary();
    table.string('name').notNullable();
    table.decimal('max_score').notNullable();
    table.timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('anac_test')))
}

exports.down = function(knex) {
  return knex.schema.dropTable('anac_test');
}
