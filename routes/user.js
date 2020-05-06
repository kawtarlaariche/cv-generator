const express = require('express');
const router = express.Router();

const userController = require('../controller/user');

router.get('/', userController.index);
router.get('/:id', userController.findById);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.put('/:id', userController.delete);

module.exports = router;