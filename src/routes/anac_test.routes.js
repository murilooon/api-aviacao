const router = require('express-promise-router')();
const anacTestController = require('../controllers/anac_test.controller');

router.post('/anac_test', anacTestController.createAnacTest);

router.get('/anac_test', anacTestController.listAllAnacTests);

router.get('/anac_test/:id', anacTestController.findAnacTestById);

router.put('/anac_test/:id', anacTestController.updateAnacTestById);

router.delete('/anac_test/:id', anacTestController.deleteAnacTestById);

module.exports = router;
