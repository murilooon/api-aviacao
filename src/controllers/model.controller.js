const knex = require('../../database/db');

exports.createModel = async (req, res) => {
  const { name, capacity, weight } = req.body;

  await knex('model')
    .insert({
      'name': name,
      'capacity': capacity,
      'weight': weight
    })

  res.status(201).send({
    message: 'Model added successfully!',
    body: {
      model: { name, capacity, weight },
    },
  });
};

exports.listAllModels = async (req, res) => {
  const response = await knex('model')
    .select('*')
    .orderBy('_id', 'asc')

  res.status(200).send(response);
};

exports.findModelById = async (req, res) => {
  const _id = parseInt(req.params.id);

  const response = await knex('model')
    .select('*')
    .where('_id', _id)

  res.status(200).send(response);
};

exports.updateModelById = async (req, res) => {
  const _id = parseInt(req.params.id);
  const { name, capacity, weight } = req.body;

  await knex('model')
    .where('_id', _id)
    .update({
      'name': name,
      'capacity': capacity,
      'weight': weight
    })

  res.status(200).send({ message: 'Model Updated Successfully!' });
};

exports.deleteModelById = async (req, res) => {
  const _id = parseInt(req.params.id);

  await knex('model')
    .where('_id', _id)
    .del()

  res.status(200).send({ message: 'Model deleted successfully!', _id });
};
