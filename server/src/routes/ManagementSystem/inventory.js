const router = require('express').Router();
const { InventoryConroller } = require('../../controllers');

router.get('/', (req, res) => res.status(200).json({ message: 'reute is accessable' }));

router.get('/get_stats', InventoryConroller.getInventoryStats);
router.get('/get_previous_stats/:date', InventoryConroller.getPreviousStats);
router.post('/submit_stats', InventoryConroller.submitStats);

module.exports = router;
