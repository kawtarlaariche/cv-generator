const express = require('express')
const router = express.Router()

const EducationController = require('../controller/education');
const checkAuth = require('../middlewares/checkAuth');

router.get('/', checkAuth, EducationController.index);
router.get('/:id', checkAuth, EducationController.findById);
router.post('/usersEducations',checkAuth, EducationController.findEducationsByUserID);
router.get('/educs/:id',checkAuth, EducationController.findEducsByUserID);
router.post('/', checkAuth, EducationController.create);
router.put('/:id', checkAuth, EducationController.update);
router.delete('/:id', checkAuth, EducationController.delete);


module.exports = router;
