const express = require('express')
const router = express.Router()

const LanguageController = require('../controller/language')
const checkAuth = require('../middlewares/checkAuth');

router.get('/', checkAuth, LanguageController.index);
router.get('/:id', checkAuth, LanguageController.findById);
router.post('/', checkAuth, LanguageController.create);
router.put('/:id', checkAuth, LanguageController.update);
router.delete('/:id', checkAuth, LanguageController.delete);


module.exports = router;
