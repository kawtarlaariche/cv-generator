const express = require('express');
const router = express.Router();

const hobbyController = require('../controller/hobby');

router.get('/', hobbyController.index);
router.get('/:id', hobbyController.findById);
router.post('/', hobbyController.create);
router.put('/:id', hobbyController.update);
router.put('/:id', hobbyController.delete);

module.exports = router;