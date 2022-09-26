var express = require('express');
var router = express.Router();
var models = require('../../models');

router.post('/close', async (req, res, next) => {
  console.log(req.body.discounts)
  const order = await models.orders.create({
    order_status: 1,
    Register_Id: 1, 
    order_type: 'walkin',
    order_time: new Date(),
    order_name: req.body.name ? req.body.name : null,
    phone_number: req.body.phoneNumber ? req.body.phoneNumber : null,
    subtotal: req.body.price.toFixed(2),
    tax: req.body.tax.toFixed(2),
    total: req.body.total.toFixed(2),
    gross_total: req.body.grossTotal.toFixed(2),
    paid_amount: req.body.paidAmount.toFixed(2),
    change: req.body.change.toFixed(2),
  })

  if (order) {
    for (let i = 0; i < req.body.pizzas.length; i++) {
      models.order_pizzas.create({
        order_id: order.order_id,
        pizza_id: req.body.pizzas[i].id,
        size: req.body.pizzas[i].size,
        price: req.body.pizzas[i].price.toFixed(2),
      })
    }

    for (let i = 0; i < req.body.discounts.length; i++) {
      models.order_discounts.create({
        order_id: order.order_id,
        discount_type: req.body.discounts[i].type,
        discount_amount: req.body.discounts[i].value
      })
    }
  }

  res.send(JSON.stringify({ message: 'success' }))
})

module.exports = router;