const express = require('express');
const router = express.Router();
const weed_controller = require('../controllers/weed.controller');

router.get('/test', weed_controller.test);
router.post('/create', weed_controller.weed_create);

module.exports = router;