const express = require('express')
const router = express.Router()

const LanguageController = require('../controller/language')

router.get('/',LanguageController.index);
router.get('/:id',LanguageController.findById);
router.post('/',LanguageController.create);
router.put('/:id',LanguageController.update);
router.delete('/:id',LanguageController.delete);


module.exports = router;
