
exports.up = function(knex) {
  return knex.schema.createTable('model', function(table) {
    table.increments('model_id').primary();
    table.string('name').notNullable();
    table.integer('capacity').notNullable();
    table.integer('weight').notNullable();
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('model');
}
