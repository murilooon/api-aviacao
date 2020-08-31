const router = require('express-promise-router')();
const airplaneController = require('../controllers/airplane.controller');

router.post('/airplane', airplaneController.createAirplane);

router.get('/airplane', airplaneController.listAllAirplanes);

router.get('/airplane/:id', airplaneController.findAirplaneById);

router.put('/airplane/:id', airplaneController.updateAirplaneById);

router.delete('/airplane/:id', airplaneController.deleteAirplaneById);

module.exports = router;
