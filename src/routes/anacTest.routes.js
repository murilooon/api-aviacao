const router = require('express-promise-router')();
const anacTestController = require('../controllers/anacTest.controller');

router.post('/anacTest', anacTestController.createAnacTest);

router.get('/anacTest', anacTestController.listAllAnacTests);

router.get('/anacTest/:id', anacTestController.findAnacTestById);

router.put('/anacTest/:id', anacTestController.updateAnacTestById);

router.delete('/anacTest/:id', anacTestController.deleteAnacTestById);

module.exports = router;
