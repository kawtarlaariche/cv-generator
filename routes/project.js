const express = require('express')
const router = express.Router()

const ProjectController = require('../controller/project')
const checkAuth = require('../middlewares/checkAuth');

router.get('/', checkAuth, ProjectController.index);
router.get('/:id', checkAuth, ProjectController.findById);
router.post('/usersProjects',checkAuth, ProjectController.findProjectsByUserID);
router.post('/', checkAuth, ProjectController.create);
router.put('/:id', checkAuth, ProjectController.update);
router.delete('/:id', checkAuth, ProjectController.delete);


module.exports = router;
