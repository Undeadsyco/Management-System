const router = require('express').Router();
const { ToppingController } = require('../../controllers');

router.get('/', (req, res) => res.status(200).send('route is accessable'));
router.get('/get_all', ToppingController.getAllToppings);
router.post('/add_toppings', ToppingController.addMultipleNewTopping);
router.get('/update_all', ToppingController.updateAllToppings);

module.exports = router;
