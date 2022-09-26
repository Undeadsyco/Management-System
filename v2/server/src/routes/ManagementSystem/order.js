const router = require('express').Router();
const { OrderController } = require('../../controllers');

router.get('/get_order_inventory/:id', OrderController.getOrderWithInventoryUsage);

module.exports = router;
