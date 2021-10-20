const express = require('express');
const router = express.Router();

const telephoneController = require('../app/controller/TelephoneController');


router.get('/create', telephoneController.create);
router.post('/store', telephoneController.store);
router.get('/:slug', telephoneController.slug);



module.exports = router;