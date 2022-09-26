const router = require('express').Router();
const { OrderController } = require('../../controllers');

router.get('/', (req, res) => res.send('route is avaliable'));
router.post('/submit_order', OrderController.createNewOrder);

module.exports = router;
