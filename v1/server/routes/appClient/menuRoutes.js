var express = require('express');
var router = express.Router();
var models = require('../../models')

router.get('/', (req, res, next) => {
  res.send('hello')
})

router.get('/api/pizza/:id', (req, res, next) => {
  models.pizza.findAll({
    where: {section_id: req.params.id},
    attributes: ['pizza_id', 'pizza_name'],
    include: [
      {
        attributes: ['topping_id', 'topping'],
        model: models.topping
      },
      {
        attributes: ['dough_id', 'dough_size'],
        model: models.dough
      }
    ]
  })
  .then(pizzas => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(pizzas))
  })
})

router.get('/api/topping/:type', (req, res, next) => {
  models.topping.findAll({
    where: { topping_type: req.params.type },
    attributes: ['topping_id', 'topping', 'price']
  })
  .then( toppings => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(toppings))
  })
})



module.exports = router;