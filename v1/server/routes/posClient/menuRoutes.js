var express = require('express');
var router = express.Router();
var models = require('../../models');

router.get('/dough', (req, res, next) => {
  models.dough.findAll({})
    .then(dough => {
      res.header('Content-Type', 'application/json')
      res.send(JSON.stringify(dough))
    })
})

router.get('/toppings/:id', (req, res, next) => {
  models.topping.findAll({
    where: { topping_id: req.params.id },
    attributes: ['topping_id', 'topping', 'topping_type', 'price']
  }).then(topping => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(topping))
  })
})

router.get('/dough/:id', (req, res, next) => {
  models.dough.findAll({
    where: { dough_id: req.params.id },
    attributes: ['dough_size'],
    include: {
      attributes: ['section'],
      model: models.section,
      include: {
        attributes: ['pizza_id', 'pizza_name'],
        model: models.pizza
      }
    }
  })
    .then(pizzas => {
      res.header('Content-Type', 'application/json')
      res.send(JSON.stringify(pizzas))
    })
})

router.get('/stuffed', (req, res, next) => {
  models.section.findAll({
    where: { section_id: 5 },
    include: {
      attributes: ['pizza_id', 'pizza_name'],
      model: models.pizza
    }
  }).then(pizzas => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(pizzas))
  })
})

router.get('/xl', (req, res, next) => {
  models.section.findAll({
    where: { section_id: 6 },
    include: {
      attributes: ['pizza_id', 'pizza_name'],
      model: models.pizza
    }
  }).then(pizzas => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(pizzas))
  })
})

router.get('/:size/:pizza', (req, res, next) => {
  models.dough.findAll({
    where: { dough_size: req.params.size },
    include: {
      where: { pizza_name: req.params.pizza },
      attributes: ['pizza_name', 'pizza_id'],
      model: models.pizza,
      include: {
        attributes: ['topping', 'topping_id'],
        model: models.topping
      }
    }
  }).then(pizza => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(pizza))
  })
})

router.get('/toppings', (req, res, next) => {
  models.topping.findAll({
    attributes: ['topping_id', 'topping', 'topping_type', 'price']
  }).then(toppings => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(toppings))
  })
})

module.exports = router;