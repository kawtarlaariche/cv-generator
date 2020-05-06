const express = require('express');
const router = express.Router();

const projectController = require('../controller/project');

router.get('/', projectController.index);
router.get('/:id', projectController.findById);
router.post('/', projectController.create);
router.put('/:id', projectController.update);
router.put('/:id', projectController.delete);

module.exports = router;