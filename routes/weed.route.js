const express = require('express');
const router = express.Router();
const weed_controller = require('../controllers/weed.controller');

router.get('/test', weed_controller.test);
router.get('/:id', weed_controller.weed_details);
router.post('/create', weed_controller.weed_create);
router.put('/:id/update', weed_controller.weed_update);
router.delete('/:id/delete', weed_controller.weed_delete);

module.exports = router;