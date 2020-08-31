const { onUpdateTrigger } = require('../../knexfile')

exports.up = function(knex) {
  return knex.schema.createTable('employee', function(table) {
    table.increments('employee_id').primary();
    table.integer('syndicate_id').notNullable().references('syndicate_id').inTable('syndicate');
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('phone').notNullable();
    table.float('salary').notNullable();
    table.timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('employee')))
};

exports.down = function(knex) {
  return knex.schema.dropTable('employee');
};
