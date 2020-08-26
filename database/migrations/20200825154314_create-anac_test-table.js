
exports.up = function(knex) {
  return knex.schema.createTable('anac_test', function(table) {
    table.increments('anac_test_id').primary();
    table.string('name').notNullable();
    table.decimal('max_score').notNullable();
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('anac_test');
}
