const express = require('express')
const router = express.Router()

const ExperienceController = require('../controller/experience')

router.get('/',ExperienceController.index);
router.get('/:id',ExperienceController.findById);
router.post('/',ExperienceController.create);
router.put('/:id',ExperienceController.update);
router.delete('/:id',ExperienceController.delete);


module.exports = router;
