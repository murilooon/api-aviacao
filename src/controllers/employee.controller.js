const knex = require('../../database/db');

exports.createEmployee = async (req, res) => {
  const { syndicate_id, name, address, phone, salary } = req.body;

  await knex('employee')
    .insert({
      'syndicate_id': syndicate_id,
      'name': name,
      'address': address,
      'phone': phone,
      'salary': salary
    })

  res.status(201).send({
    message: 'Employee added successfully!',
    body: {
      model: { syndicate_id, name, address, phone, salary },
    },
  });
};

exports.listAllEmployees = async (req, res) => {
  const response = await knex('employee')
    .select('*')
    .orderBy('name', 'asc')

  res.status(200).send(response);
};

exports.findEmployeeById = async (req, res) => {
  const _id = parseInt(req.params.id);

  const response = await knex('employee')
    .select('*')
    .where('_id', _id)

  res.status(200).send(response);
};

exports.updateEmployeeById = async (req, res) => {
  const _id = parseInt(req.params.id);
  const { syndicate_id, name, address, phone, salary } = req.body;

  await knex('employee')
    .where('_id', _id)
    .update({
      'syndicate_id': syndicate_id,
      'name': name,
      'address': address,
      'phone': phone,
      'salary': salary
    })

  res.status(200).send({ message: 'Employee Updated Successfully!' });
};

exports.deleteEmployeeById = async (req, res) => {
  const _id = parseInt(req.params.id);

  await knex('employee')
    .where('_id', _id)
    .del()

  res.status(200).send({ message: 'Employee deleted successfully!', _id });
};
