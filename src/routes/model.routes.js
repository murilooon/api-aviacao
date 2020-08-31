const router = require('express-promise-router')();
const modelController = require('../controllers/model.controller');

router.post('/model', modelController.createModel);

router.get('/model', modelController.listAllModels);

router.get('/model/:id', modelController.findModelById);

router.put('/model/:id', modelController.updateModelById);

router.delete('/model/:id', modelController.deleteModelById);

module.exports = router;
