const db = require('../config/database');

exports.createModel = async (req, res) => {
  const { name, capacity, weight } = req.body;
  await db.query(
    'INSERT INTO model (name, capacity, weight) VALUES ($1, $2, $3)',
    [name, capacity, weight],
  );

  res.status(201).send({
    message: 'Model added successfully!',
    body: {
      model: { name, capacity, weight },
    },
  });
};

exports.listAllModels = async (req, res) => {
  const response = await db.query(
    'SELECT * FROM model ORDER BY modelId ASC',
  );

  res.status(200).send(response.rows);
};

exports.findModelById = async (req, res) => {
  const modelId = parseInt(req.params.id);

  const response = await db.query(
    'SELECT * FROM model WHERE modelId = $1',
    [modelId],
  );

  res.status(200).send(response.rows);
};

exports.updateModelById = async (req, res) => {
  const modelId = parseInt(req.params.id);
  const { name, capacity, weight } = req.body;

  await db.query(
    'UPDATE model SET name = $1, capacity = $2, weight = $3 WHERE modelId = $4',
    [name, capacity, weight, modelId],
  );

  res.status(200).send({ message: 'Model Updated Successfully!' });
};

exports.deleteModelById = async (req, res) => {
  const modelId = parseInt(req.params.id);

  await db.query('DELETE FROM model WHERE modelId = $1', [
    modelId,
  ]);

  res.status(200).send({ message: 'Model deleted successfully!', modelId });
};
