const knex = require('../../database/db');

exports.createAirplane = async (req, res) => {
  const { model_id, serial_number } = req.body;

  await knex('airplane')
    .insert({
      'model_id': model_id,
      'serial_number': serial_number
    })

  res.status(201).send({
    message: 'Airplane added successfully!',
    body: {
      model: { model_id, serial_number },
    },
  });
};

exports.listAllAirplanes = async (req, res) => {
  const response = await knex('airplane')
    .select('*')
    .orderBy('model_id', 'asc')

  res.status(200).send(response);
};

exports.findAirplaneById = async (req, res) => {
  const register_id = parseInt(req.params.id);

  const response = await knex('airplane')
    .select('*')
    .where('register_id', register_id)

  res.status(200).send(response);
};

exports.updateAirplaneById = async (req, res) => {
  const register_id = parseInt(req.params.id);
  const { model_id, serial_number } = req.body;

  await knex('airplane')
    .where('register_id', register_id)
    .update({
      'model_id': model_id,
      'serial_number': serial_number
    })

  res.status(200).send({ message: 'Airplane Updated Successfully!' });
};

exports.deleteAirplaneById = async (req, res) => {
  const register_id = parseInt(req.params.id);

  await knex('airplane')
    .where('register_id', register_id)
    .del()

  res.status(200).send({ message: 'Airplane deleted successfully!', register_id });
};
