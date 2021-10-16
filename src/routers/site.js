const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/SiteController');


router.get('/:slug', siteController.slug);
router.get('/', siteController.home);




module.exports = router;