const router = require('express').Router();
const { PizzaController, DoughController, ToppingController } = require('../../controllers');

router.route('/').get((req, res) => res.status(200).json({ message: 'route is accessable' }));
router.get('/get_sizes', DoughController.getAllDoughSizes);
router.get('/get_pizzas_by_dough_id/:doughId', PizzaController.getPizzaListBySize);
router.get('/get_stuffed', PizzaController.getStuffedPizzaList);
router.get('/get_toppings', ToppingController.getAllToppings);
router.get('/get_pizza_by_id/:pizzaId/:doughId', PizzaController.getSinglePizzaById);

module.exports = router;
