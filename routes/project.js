const express = require('express')
const router = express.Router()

const ProjectController = require('../controller/project')

router.get('/',ProjectController.index);
router.get('/:id',ProjectController.findById);
router.post('/',ProjectController.create);
router.put('/:id',ProjectController.update);
router.delete('/:id',ProjectController.delete);


module.exports = router;
