const router = require('express-promise-router')();
const syndicateController = require('../controllers/syndicate.controller');

router.post('/syndicate', syndicateController.createSyndicate);

router.get('/syndicate', syndicateController.listAllSyndicate);

router.get('/syndicate/:id', syndicateController.findSyndicateById);

router.put('/syndicate/:id', syndicateController.updateSyndicateById);

router.delete('/syndicate/:id', syndicateController.deleteSyndicateById);

module.exports = router;
