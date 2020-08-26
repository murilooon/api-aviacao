
exports.up = function(knex) {
  return knex.schema.createTable('airplane', function(table) {
    table.increments('register_id').primary();
    table.integer('model_id').notNullable().references('model_id').inTable('model');
    table.integer('serial_number').notNullable();
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('airplane');
}
