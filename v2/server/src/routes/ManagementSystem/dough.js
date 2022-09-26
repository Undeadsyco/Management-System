const router = require('express').Router();
const { DoughController } = require('../../controllers');

router.get('/', (req, res) => res.status(200).json({ message: 'route is accessable' }));
router.post('/add_new', DoughController.createNewDoughSize);
router.get('/get_all', DoughController.getAllDoughSizes);
router.put('/update_one', DoughController.updateDoughSize);
router.delete('/delete_one/:id', DoughController.deleteSizeById);

module.exports = router;
