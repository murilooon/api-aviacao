const knex = require('../../database/db');

exports.createAnacTest = async (req, res) => {
  const { name, max_score } = req.body;

  await knex('anac_test')
    .insert({
      'name': name,
      'max_score': max_score
    })

  res.status(201).send({
    message: 'ANAC test added successfully!',
    body: {
      model: { name, max_score },
    },
  });
};

exports.listAllAnacTests = async (req, res) => {
  const response = await knex('anac_test')
    .select('*')
    .orderBy('name', 'asc')

  res.status(200).send(response);
};

exports.findAnacTestById = async (req, res) => {
  const _id = parseInt(req.params.id);

  const response = await knex('anac_test')
    .select('*')
    .where('_id', _id)

  res.status(200).send(response);
};

exports.updateAnacTestById = async (req, res) => {
  const _id = parseInt(req.params.id);
  const { name, max_score } = req.body;

  await knex('anac_test')
    .where('_id', _id)
    .update({
      'name': name,
      'max_score': max_score
    })

  res.status(200).send({ message: 'ANAC test Updated Successfully!' });
};

exports.deleteAnacTestById = async (req, res) => {
  const _id = parseInt(req.params.id);

  await knex('anac_test')
    .where('_id', _id)
    .del()

  res.status(200).send({ message: 'ANAC test deleted successfully!', _id });
};
