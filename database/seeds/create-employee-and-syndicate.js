
exports.seed = function(knex) {
  return knex('employee').del()
    .then(function () {
      return knex('syndicate').del()
    })
    .then(function () {
      return knex('syndicate').insert([
        { name: 'SNA' },
        { name: 'SNEA' },
        { name: 'SINA'}
      ]);
    })
    .then(function () {
      return knex('employee').insert([
        { syndicate_id: 1, name: 'Mary Roe', address: '777 Brockton Avenue, Abington MA 2351', phone: '+1-202-555-0184', salary: 5400.00 },
        { syndicate_id: 1, name: 'Jane Python', address: '30 Memorial Drive, Avon MA 2322', phone: '+1-202-555-0145', salary: 2550.99 },
        { syndicate_id: 2, name: 'John Smith', address: '700 Oak Street, Brockton MA 2301', phone: '+1-202-555-0180', salary: 1000.00 },
        { syndicate_id: 3, name: 'Chris Ruby', address: '337 Russell St, Hadley MA 1035', phone: '+1-202-555-0116', salary: 9900.01 },
        { syndicate_id: 3, name: 'Edward Brown', address: '11 Jungle Road, Leominster MA 1453', phone: '+1-202-555-0194', salary: 750.00 }
      ]);
    });
};
