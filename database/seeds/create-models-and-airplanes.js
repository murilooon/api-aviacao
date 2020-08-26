
exports.seed = function(knex) {
  return knex('airplane').del()
    .then(function () {
      return knex('model').del()
    })
    .then(function () {
      return knex('model').insert([
        { name: 'A345', capacity: 300, weight: 1000 },
        { name: 'B543', capacity: 600, weight: 2000 },
        { name: 'C555', capacity: 900, weight: 3000 }
      ]);
    })
    .then(function () {
      return knex('airplane').insert([
        { model_id: 1, serial_number: 333666 },
        { model_id: 2, serial_number: 111222 },
        { model_id: 3, serial_number: 444888 }
      ]);
    });
};
