var express = require('express');
var router = express.Router();
var models = require('../../models');
const { Op, Sequelize } = require('sequelize');

router.get('/report', async (req, res) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();

  const start = new Date(year, month, day, 9);
  const end = new Date(year, month, day, 21);

  try {
    const reports = [];
    for (let i = start; i < end; i.setMinutes(i.getMinutes() + 30)) {
      const report = await models.orders.findAll({
        where: {
          [Op.and]: [
            { order_time: { [Op.gt]: new Date(i.getFullYear(), i.getMonth(), i.getDate(), i.getHours(), i.getMinutes()) } },
            { order_time: { [Op.lt]: new Date(i.getFullYear(), i.getMonth(), i.getDate(), i.getHours(), i.getMinutes() + 30) } }
          ]
        },
        attributes: [
          [Sequelize.fn('SUM', Sequelize.col('subtotal')), 'subTotal'],
          [Sequelize.fn('SUM', Sequelize.col('tax')), 'tax'],
          [Sequelize.fn('SUM', Sequelize.col('total')), 'total'],
          [Sequelize.fn('SUM', Sequelize.col('gross_total')), 'grossTotal'],
        ]
      });

      reports.push({ time: { hour: i.getHours(), minutes: i.getMinutes() }, report });
    }

    const totalReport = await models.orders.findAll({
      where: {
        [Op.and]: [
          { order_time: { [Op.gt]: new Date(year, month, day, 9) } },
          { order_time: { [Op.lt]: new Date(year, month, day, 21) } },
        ]
      },
      attributes: [
        [Sequelize.fn('SUM', Sequelize.col('subtotal')), 'subTotal'],
        [Sequelize.fn('SUM', Sequelize.col('tax')), 'tax'],
        [Sequelize.fn('SUM', Sequelize.col('total')), 'total'],
        [Sequelize.fn('SUM', Sequelize.col('gross_total')), 'grossTotal'],
      ]
    })

    res.send(JSON.stringify({ reports, totalReport }))
  } catch (err) {
    console.log(err)
  }
})

router.get('/closed-orders', (req, res, next) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();

  models.orders.findAll({
    where: {
      [Op.and]: [
        { order_time: { [Op.gt]: new Date(year, month, day) } },
        { order_status: 1 },
        { order_type: 'walkin' },
      ]
    },
    attributes: ['order_id', 'order_name']
  }).then(order => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(order))
  })
})

router.get('/closed-order/id/:orderId', (req, res, next) => {
  console.log(req.params.orderId)
  models.orders.findOne({
    where: { order_id: req.params.orderId },
    attributes: ['order_name', 'subtotal', 'tax', 'total', 'paid_amount', 'change'],
    include: [
      {
        model: models.pizza,
        attributes: ['pizza_name']
      },
      {
        model: models.order_discounts,
        attributes: ['discount_type', 'discount_amount']
      }
    ]
  }).then(order => {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(order))
  })
});

router.get('/registers', async (req, res) => {
  try {
    const registers = await models.register.findAll({
      include: {
        model: models.employee,
        attributes: ['Employee_name', 'Employee_Id']
      }
    });

    if (registers) {
      res.send(JSON.stringify({ status: 200, data: { registers } }))
    }
  } catch (error) {
    res.send(JSON.stringify({ status: 500, message: error.message }))
  }
});

router.put('/assign/register', async (req, res) => {
  try {
    models.register.update(
      { [Op.and]: [
        { Employee_Id: req.body.empId },
        { Is_Assigned: 1 }
      ]},
      { where: { Register_Id: req.body.id }}
    ).then((data) => {
      if (data) {
        res.send(JSON.stringify({ status: 200, data }))
      } else {
        throw new Error('Something Went Wrong!');
      }
    });
  } catch (err) {
    res.send(JSON.stringify({ status: 500, message: error.message }));
  }
});

router.put('/unassign/register', (req, res) => {
  try {
    models.register.update(
      { Employee_Id: null },
      { where: { Register_Id: req.body.id } }
    ).then((data) => {
      if (data) {
        res.send(JSON.stringify({ status: 200, data }));
      } else {
        throw new Error('Something Went Wrong!');
      }
    })
  } catch (err) {
    res.send(JSON.stringify({ status: 500, message: error.message }))
  }
});

module.exports = router;