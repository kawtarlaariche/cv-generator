const express = require('express')
const router = express.Router()

const UserController = require('../controller/user')
const checkAuth = require('../middlewares/checkAuth');

router.get('/', checkAuth, UserController.index);
router.get('/:id', checkAuth, UserController.findById);
router.post('/user', UserController.getUserByEmail);
router.post('/', checkAuth, UserController.create);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.put('/:id', checkAuth, UserController.update);
router.delete('/:id', checkAuth, UserController.delete);

router.post('/checkAuth', checkAuth, (req, res, next) => {
    res.json({msg: "Ok"})
})


module.exports = router;
