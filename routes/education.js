const express = require('express');
const router = express.Router();

const educationController = require('../controller/education');

router.get('/', educationController.index);
router.get('/:id', educationController.findById);
router.post('/', educationController.create);
router.put('/:id', educationController.update);
router.put('/:id', educationController.delete);

module.exports = router;