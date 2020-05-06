const express = require('express');
const router = express.Router();

const experienceController = require('../controller/experience');

router.get('/', experienceController.index);
router.get('/:id', experienceController.findById);
router.post('/', experienceController.create);
router.put('/:id', experienceController.update);
router.put('/:id', experienceController.delete);

module.exports = router;