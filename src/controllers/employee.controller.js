const knex = require('../../database/db');

exports.createEmployee = async (req, res) => {
  const { syndicate_id, name, address, phone, salary } = req.body;

  await knex('airplane')
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

exports.listAllEmployee = async (req, res) => {
  const response = await knex('employee')
    .select('*')
    .orderBy('name', 'asc')

  res.status(200).send(response);
};

exports.findAirplaneById = async (req, res) => {
  const employee_id = parseInt(req.params.id);

  const response = await knex('employee')
    .select('*')
    .where('employee_id', employee_id)

  res.status(200).send(response);
};

exports.updateAirplaneById = async (req, res) => {
  const employee_id = parseInt(req.params.id);
  const { syndicate_id, name, address, phone, salary } = req.body;

  await knex('employee')
    .where('employee_id', employee_id)
    .update({
      'syndicate_id': syndicate_id,
      'name': name,
      'address': address,
      'phone': phone,
      'salary': salary
    })

  res.status(200).send({ message: 'Employee Updated Successfully!' });
};

exports.deleteAirplaneById = async (req, res) => {
  const employee_id = parseInt(req.params.id);

  await knex('employee')
    .where('employee_id', employee_id)
    .del()

  res.status(200).send({ message: 'Employee deleted successfully!', employee_id });
};
