const express = require('express');
const router = express.Router();

const languageController = require('../controller/language');

router.get('/', languageController.index);
router.get('/:id', languageController.findById);
router.post('/', languageController.create);
router.put('/:id', languageController.update);
router.put('/:id', languageController.delete);

module.exports = router;