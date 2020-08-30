const { onUpdateTrigger } = require('../../knexfile')

exports.up = function(knex) {
  return knex.schema.createTable('syndicate', function(table) {
    table.increments('syndicate_id').primary();
    table.string('name').notNullable();
    table.timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('syndicate')))
};

exports.down = function(knex) {
  return knex.schema.dropTable('syndicate');
};
