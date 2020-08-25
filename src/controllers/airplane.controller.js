const db = require('../config/database');

exports.createAirplane = async (req, res) => {
  const { modelId, serialNumber } = req.body;
  await db.query(
    'INSERT INTO airplane (modelId, serialNumber) VALUES ($1, $2)',
    [modelId, serialNumber],
  );

  res.status(201).send({
    message: 'Airplane added successfully!',
    body: {
      model: { modelId, serialNumber },
    },
  });
};

exports.listAllAirplanes = async (req, res) => {
  const response = await db.query(
    'SELECT * FROM airplane ORDER BY modelId ASC',
  );

  res.status(200).send(response.rows);
};

exports.findAirplaneById = async (req, res) => {
  const registerId = parseInt(req.params.id);

  const response = await db.query(
    'SELECT * FROM airplane WHERE registerId = $1',
    [registerId],
  );

  res.status(200).send(response.rows);
};

exports.updateAirplaneById = async (req, res) => {
  const registerId = parseInt(req.params.id);
  const { modelId, serialNumber } = req.body;

  await db.query(
    'UPDATE airplane SET modelId = $1, serialNumber = $2 WHERE registerId = $3',
    [modelId, serialNumber, registerId],
  );

  res.status(200).send({ message: 'Airplane Updated Successfully!' });
};

exports.deleteAirplaneById = async (req, res) => {
  const registerId = parseInt(req.params.id);

  await db.query('DELETE FROM airplane WHERE registerId = $1', [
    registerId,
  ]);

  res.status(200).send({ message: 'Airplane deleted successfully!', registerId });
};
