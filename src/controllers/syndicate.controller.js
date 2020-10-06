const knex = require('../../database/db');

exports.createSyndicate = async (req, res) => {
  const { name } = req.body;

  await knex('syndicate')
    .insert({
      'name': name
    })

  res.status(201).send({
    message: 'Syndicate added successfully!',
    body: {
      model: { name },
    },
  });
};

exports.listAllSyndicate = async (req, res) => {
  const response = await knex('syndicate')
    .select('*')
    .orderBy('name', 'asc')

  res.status(200).send(response);
};

exports.findSyndicateById = async (req, res) => {
  const _id = parseInt(req.params.id);

  const response = await knex('syndicate')
    .select('*')
    .where('_id', _id)

  res.status(200).send(response);
};

exports.updateSyndicateById = async (req, res) => {
  const _id = parseInt(req.params.id);
  const { name } = req.body;

  await knex('syndicate')
    .where('_id', _id)
    .update({
      'name': name
    })

  res.status(200).send({ message: 'Syndicate Updated Successfully!' });
};

exports.deleteSyndicateById = async (req, res) => {
  const _id = parseInt(req.params.id);

  await knex('syndicate')
    .where('_id', _id)
    .del()

  res.status(200).send({ message: 'Syndicate deleted successfully!', _id });
};
