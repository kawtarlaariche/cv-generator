const express = require('express')
const router = express.Router()

const ExperienceController = require('../controller/experience')
const checkAuth = require('../middlewares/checkAuth');

router.get('/', checkAuth, ExperienceController.index);
router.get('/:id', checkAuth, ExperienceController.findById);
router.post('/', checkAuth, ExperienceController.create);
router.put('/:id', checkAuth, ExperienceController.update);
router.delete('/:id', checkAuth, ExperienceController.delete);


module.exports = router;
