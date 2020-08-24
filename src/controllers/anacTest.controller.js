const db = require('../config/database');

exports.createAnacTest = async (req, res) => {
  const { name, maxScore } = req.body;
  await db.query(
    'INSERT INTO anacTest (name, maxScore) VALUES ($1, $2)',
    [name, maxScore],
  );

  res.status(201).send({
    message: 'ANAC test added successfully!',
    body: {
      model: { name, maxScore },
    },
  });
};

exports.listAllAnacTests = async (req, res) => {
  const response = await db.query(
    'SELECT * FROM anacTest ORDER BY name ASC',
  );

  res.status(200).send(response.rows);
};

exports.findAnacTestById = async (req, res) => {
  const anacTestId = parseInt(req.params.id);

  const response = await db.query(
    'SELECT * FROM anacTest WHERE anacTestId = $1',
    [anacTestId],
  );

  res.status(200).send(response.rows);
};

exports.updateAnacTestById = async (req, res) => {
  const anacTestId = parseInt(req.params.id);
  const { name, maxScore } = req.body;

  await db.query(
    'UPDATE anacTest SET name = $1, maxScore = $2 WHERE anacTestId = $3',
    [name, maxScore, anacTestId],
  );

  res.status(200).send({ message: 'ANAC test Updated Successfully!' });
};

exports.deleteAnacTestById = async (req, res) => {
  const anacTestId = parseInt(req.params.id);

  await db.query('DELETE FROM anacTest WHERE anacTestId = $1', [
    anacTestId,
  ]);

  res.status(200).send({ message: 'ANAC test deleted successfully!', anacTestId });
};
