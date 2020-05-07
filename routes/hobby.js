const express = require('express')
const router = express.Router()

const HobbyController = require('../controller/hobby')

router.get('/',HobbyController.index);
router.get('/:id',HobbyController.findById);
router.post('/',HobbyController.create);
router.put('/:id',HobbyController.update);
router.delete('/:id',HobbyController.delete);


module.exports = router;
