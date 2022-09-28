/* eslint-disable max-len */
/* eslint-disable camelcase */
const { Types: { ObjectId } } = require('mongoose');
const { orderModel, toppingInventoryModel, doughInventoryModel } = require('../models');

class OrderController {
  // creating new order object in database with body retrived from client
  static async createNewOrder(req, res) {
    try {
      const {
        name, pizzaList, comments, price, paidAmount,
      } = req.body;

      const pizza_list = [];
      pizzaList.forEach((pizza) => {
        let toppingList = [];

        pizza.toppings.forEach((topping) => {
          if (topping.topping !== ' ') {
            toppingList.push(topping._id);
          }
        });

        pizza.addedToppings.forEach((topping) => {
          toppingList.push(topping._id);
        });

        pizza.removedToppings.forEach((removedTopping) => {
          toppingList = toppingList.filter((topping) => removedTopping._id !== topping);
        });

        pizza_list.push({
          pizza_id: pizza.id,
          dough_id: pizza.size.dough._id,
          discount: pizza.discount,
          used_toppings: toppingList,
        });
      });

      const newOrder = await orderModel.create({
        customer_name: name,
        pizza_list,
        comments,
        subtotal: parseFloat(price.toFixed(2)),
        tax: parseFloat((price * 0.008).toFixed(2)),
        total: (price + parseFloat((price * 0.086).toFixed(2))),
        paid_amount: parseFloat(paidAmount.toFixed(2)),
        change: parseFloat((paidAmount - price).toFixed(2)),
      });

      if (!newOrder) {
        const err = new Error('was unable to submit order');
        err.status = 500;
        throw err;
      }

      newOrder.pizza_list.forEach(async (pizza) => {
        const newDoughInventory = await doughInventoryModel.create({
          order_id: newOrder._id,
          dough_id: pizza.dough_id,
        });

        if (!newDoughInventory) {
          const err = new Error('error in creating dough inventory');
          err.status = 500;
          throw err;
        }

        pizza.used_toppings.forEach(async (topping) => {
          const newToppingInventory = await toppingInventoryModel.create({
            order_id: newOrder._id,
            topping_id: topping,
            dough_id: pizza.dough_id,
          });

          if (!newToppingInventory) {
            const err = new Error('error in creating topping inventory');
            err.status = 500;
            throw err;
          }
        });
      });

      res.status(200).json({ created: true, message: 'success' });
    } catch (err) {
      res.status(err.status).json({ created: false, message: err.message });
    }
  }

  // gets a specified order with revieved id and appeds the topping/dough usage
  static async getOrderWithInventoryUsage(req, res, next) {
    try {
      let [selectedOrder] = await orderModel.aggregate([
        {
          $match: { _id: new ObjectId(req.body.id) },
        },
        {
          $lookup: {
            from: 'dough_inventories',
            let: { id: '$_id' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ['$order_id', '$$id'],
                  },
                },
              },
              {
                $lookup: {
                  from: 'doughs',
                  localField: 'dough_id',
                  foreignField: '_id',
                  as: 'dough',
                },
              },
              {
                $unwind: '$dough',
              },
            ],
            as: 'dough_used',
          },
        },
        {
          $lookup: {
            from: 'topping_inventories',
            let: { id: '$_id' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ['$order_id', '$$id'],
                  },
                },
              },
              {
                $lookup: {
                  from: 'toppings',
                  localField: 'topping_id',
                  foreignField: '_id',
                  as: 'topping',
                },
              },
              {
                $lookup: {
                  from: 'doughs',
                  localField: 'dough_id',
                  foreignField: '_id',
                  as: 'dough',
                },
              },
              {
                $unwind: { path: '$topping' },
              },
              {
                $unwind: { path: '$dough' },
              },
            ],
            as: 'toppings_used',
          },
        },
        {
          $project: {
            pizza_list: 1,
            toppings_used: {
              dough: {
                size: 1,
              },
              topping: 1,
            },
            dough_used: {
              dough: 1,
            },
            subtotal: 1,
            tax: 1,
            total: 1,
            paid_amount: 1,
            change: 1,
          },
        },
      ]);

      selectedOrder = await toppingInventoryModel
        .populate(selectedOrder, { path: 'toppings_used.topping_id', model: 'toppings' });
      selectedOrder = await toppingInventoryModel
        .populate(selectedOrder, { path: 'toppings_used.dough_id dough_used.dough_id', model: 'dough' });

      const {
        pizza_list, subtotal, tax, total, change,
        paid_amount, toppings_used, dough_used,
      } = selectedOrder;

      const toppingsUsed = OrderController.sortToppings(toppings_used);
      const doughUsed = OrderController.sortDough(dough_used);

      const order = {
        pizzaList: pizza_list,
        subtotal,
        tax,
        total,
        change,
        paidAmount: paid_amount,
        toppingsUsed,
        doughUsed,
      };

      res.status(200).json({ order });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  // sorts toppings into managable and readable data
  static sortToppings(list) {
    const toppingsUsed = {};
    for (let i = 0; i < list.length; i += 1) {
      const keys = Object.keys(toppingsUsed);
      const { amount_per_size, measurement, topping } = list[i].topping;

      let amount;

      const [size] = (list[i].dough.size).split(' ');

      switch (size) {
        case 'Medium':
          amount = amount_per_size[0].amount;
          break;
        case 'Large':
          amount = amount_per_size[1].amount;
          break;
        case 'Family':
          amount = amount_per_size[2].amount;
          break;
        default:
          amount = 0;
          break;
      }

      if (keys.includes(topping)) {
        toppingsUsed[topping].amount += amount;
      } else {
        toppingsUsed[topping] = {
          amount,
          measurement,
        };
      }
    }

    return toppingsUsed;
  }

  // sorts dough into managable and readable data
  static sortDough(list) {
    const doughUsed = {};

    for (let i = 0; i < list.length; i += 1) {
      const keys = Object.keys(doughUsed);
      const { size, weight, measurement } = list[i].dough;

      if (keys.includes(size)) {
        doughUsed[size].numUsed += 1;
      } else {
        doughUsed[size] = {
          weight, measurement, numUsed: 1,
        };
      }
    }

    return doughUsed;
  }
}

module.exports = OrderController;
