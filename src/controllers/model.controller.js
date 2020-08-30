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
    .orderBy('model_id', 'asc')

  res.status(200).send(response);
};

exports.findModelById = async (req, res) => {
  const model_id = parseInt(req.params.id);

  const response = await knex('model')
    .select('*')
    .where('model_id', model_id)

  res.status(200).send(response);
};

exports.updateModelById = async (req, res) => {
  const model_id = parseInt(req.params.id);
  const { name, capacity, weight } = req.body;

  await knex('model')
    .where('model_id', model_id)
    .update({
      'name': name,
      'capacity': capacity,
      'weight': weight
    })

  res.status(200).send({ message: 'Model Updated Successfully!' });
};

exports.deleteModelById = async (req, res) => {
  const model_id = parseInt(req.params.id);

  await knex('model')
    .where('model_id', model_id)
    .del()

  res.status(200).send({ message: 'Model deleted successfully!', model_id });
};
