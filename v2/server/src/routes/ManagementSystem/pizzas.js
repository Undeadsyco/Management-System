const router = require('express').Router();
const { PizzaController } = require('../../controllers');

router.route('/').get((req, res) => res.status(200).json({ message: ' route is reachable' }));
router.get('/get_all', PizzaController.getPizzasList);
router.get('/get_all/:section', PizzaController.getPizzaListBySection);
router.post('/add_new', PizzaController.createNewPizza);

module.exports = router;
