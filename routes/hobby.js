const express = require('express')
const router = express.Router()

const HobbyController = require('../controller/hobby')
const checkAuth = require('../middlewares/checkAuth');

router.get('/', checkAuth, HobbyController.index);
router.get('/:id', checkAuth, HobbyController.findById);
router.post('/usersHobbies',checkAuth, HobbyController.findHobbiesByUserID);
router.post('/', checkAuth, HobbyController.create);
router.put('/:id', checkAuth, HobbyController.update);
router.delete('/:id', checkAuth, HobbyController.delete);


module.exports = router;
