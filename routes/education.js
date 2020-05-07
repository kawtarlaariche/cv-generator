const express = require('express')
const router = express.Router()

const EducationController = require('../controller/education')

router.get('/',EducationController.index);
router.get('/:id',EducationController.findById);
router.post('/',EducationController.create);
router.put('/:id',EducationController.update);
router.delete('/:id',EducationController.delete);


module.exports = router;
