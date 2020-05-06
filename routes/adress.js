const express = require('express');
const router = express.Router();

const adressController = require('../controller/adress');

router.get('/', adressController.index);
router.get('/:id', adressController.findById);
router.post('/', adressController.create);
router.put('/:id', adressController.update);
router.put('/:id', adressController.delete);

module.exports = router;
