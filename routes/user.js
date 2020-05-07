const express = require('express')
const router = express.Router()

const UserController = require('../controller/user')

router.get('/',UserController.index);
router.get('/:id',UserController.findById);
router.post('/',UserController.create);
router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.put('/:id',UserController.update);
router.delete('/:id',UserController.delete);


module.exports = router;
