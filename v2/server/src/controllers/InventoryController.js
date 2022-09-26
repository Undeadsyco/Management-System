/* eslint-disable camelcase */
const { toppingsModel, doughModel, inventoryModel } = require('../models');

class InventoryConroller {
  // gets inventory for toppings and dough
  static getPreviousMonday(date = new Date()) {
    const lastMonday = new Date();
    lastMonday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
    lastMonday.setHours(0, 0, 0, 0);
    return lastMonday;
  }

  static async getToppingUsage(startDate = new Date(), endDate = new Date()) {
    const toppings = await toppingsModel.aggregate([{
      $lookup: {
        from: 'topping_inventories',
        let: { id: '$_id' },
        localField: '_id',
        foreignField: 'topping_id',
        pipeline: [
          {
            $match: {
              $expr: { $eq: ['$topping_id', '$$id'] },
            },
          }, {
            $lookup: {
              from: 'orders',
              localField: 'order_id',
              foreignField: '_id',
              as: 'order',
            },
          }, {
            $unwind: '$order',
          }, {
            $lookup: {
              from: 'doughs',
              localField: 'dough_id',
              foreignField: '_id',
              as: 'dough',
            },
          }, {
            $unwind: '$dough',
          }, {
            $match: {
              $expr: {
                order: {
                  order_date: {
                    $and: [
                      { $gte: ['order_date', new Date(startDate)] },
                      { $lte: ['order_date', new Date(endDate)] },
                    ],
                  },
                },
              },
            },
          }, {
            $project: {
              _id: 0,
              dough: {
                size: 1,
              },
            },
          },
        ],
        as: 'times_used',
      },
    }]);
    return toppings;
  }

  static async getDoughUsage(startDate = new Date(), endDate = new Date()) {
    const dough = await doughModel.aggregate([{
      $lookup: {
        from: 'dough_inventories',
        let: { id: '$_id' },
        localField: '_id',
        foreignField: 'dough_id',
        pipeline: [
          {
            $lookup: {
              from: 'orders',
              localField: 'order_id',
              foreignField: '_id',
              as: 'order',
            },
          }, {
            $unwind: '$order',
          }, {
            $project: {
              _id: 0,
              order: {
                order_date: 1,
              },
            },
          }, {
            $match: {
              $expr: {
                order: {
                  $and: [
                    { $gte: ['order_date', new Date(startDate)] },
                    { $lte: ['order_date', new Date(endDate)] },
                  ],
                },
              },
            },
          },
        ],
        as: 'times_used',
      },
    }]);
    return dough;
  }

  // sorts toppings into managable and readable data
  static sortToppings(list) {
    const toppingsUsed = [];
    for (let i = 0; i < list.length; i += 1) {
      const {
        _id, amount_per_size, times_used, topping, measurement,
      } = list[i];

      let amount = 0;
      if (times_used.length !== 0) {
        times_used.forEach((item) => {
          const size = item.dough.size.split(' ')[0];

          switch (size) {
            case 'Medium':
              amount += amount_per_size[0].amount;
              break;
            case 'Large':
              amount += amount_per_size[1].amount;
              break;
            case 'Family':
              amount += amount_per_size[2].amount;
              break;
            default:
              amount += 0;
              break;
          }
        });
      }

      let spent = 0;
      if (amount !== 0) {
        switch (measurement) {
          case 'OZ':
            spent = parseFloat((amount / 16) * 2);
            break;
          case 'TBSPOONS':
            spent = parseFloat(amount * 0.25);
            break;
          case 'SLICES':
            switch (topping) {
              case 'Zucchini':
              case 'Pepperoni':
                spent = parseFloat((amount / 20) * 0.25);
                break;
              case 'Canadian Bacon':
              case 'Salami':
              case 'Big Pepperoni':
                spent = parseFloat((amount / 10) * 0.50);
                break;
              default:
                spent = 0;
                break;
            }
            break;
          case 'CUPS':
            spent = parseFloat(amount * 1);
            break;
          default:
            spent = 0;
            break;
        }
      }

      toppingsUsed.push({
        itemId: _id,
        item: topping,
        calculatedUsage: amount.toFixed(2),
        measurement,
        amountSpent: spent.toFixed(2),
      });
    }

    return toppingsUsed;
  }

  // sorts dough into managable and readable data
  static sortDough(list) {
    const doughUsed = [];

    for (let i = 0; i < list.length; i += 1) {
      const {
        _id, times_used, size, measurement,
      } = list[i];

      let weight = 0;
      times_used.forEach(() => {
        weight += list[i].weight;
      });

      doughUsed.push({
        itemId: _id,
        item: size,
        calculatedUsage: weight,
        measurement,
        amountSpent: parseFloat((weight / 16) * 1.5).toFixed(2),
      });
    }

    return doughUsed;
  }

  static async getInventoryStats(req, res, next) {
    try {
      const lastMonday = InventoryConroller.getPreviousMonday();

      const toppings = await InventoryConroller.getToppingUsage(lastMonday);
      const dough = await InventoryConroller.getDoughUsage(lastMonday);

      if (!toppings || !dough) {
        let err;
        if (!toppings) err = new Error('could not find topping inventory');
        if (!dough) err = new Error('could not find dough inventory');
        err.status = 400;
        throw err;
      }

      const toppingsUsed = InventoryConroller.sortToppings(toppings);
      const doughUsed = InventoryConroller.sortDough(dough);

      res.status(200).json({ inventory: [...doughUsed, ...toppingsUsed] });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async getPreviousStats(req, res, next) {
    try {
      const requestedDate = new Date(req.params.date);
      const startDate = new Date(requestedDate.setDate(requestedDate.getDate() - 1));
      const endDate = new Date(requestedDate.setDate(requestedDate.getDate() + 5));

      const toppings = await InventoryConroller.getToppingUsage(startDate, endDate);
      const dough = await InventoryConroller.getDoughUsage(startDate, endDate);

      if (!toppings || !dough) {
        let err;
        if (!toppings) err = new Error('could not find topping inventory');
        if (!dough) err = new Error('could not find dough inventory');
        err.status = 400;
        throw err;
      }

      const toppingsUsed = InventoryConroller.sortToppings(toppings);
      const doughUsed = InventoryConroller.sortDough(dough);

      res.status(200).json({ inventory: [...doughUsed, ...toppingsUsed] });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async submitStats(req, res, next) {
    try {
      const list = req.body.map((item) => {
        const { itemId, measurement } = item;
        let { actualUsage, calculatedUsage } = item;

        if (actualUsage && actualUsage !== 0) {
          actualUsage = parseFloat(actualUsage);
          calculatedUsage = parseFloat(calculatedUsage);

          const pricePerMeasurement = 1.5;
          const usagePerctDif = parseFloat(
            (((actualUsage * 100) / calculatedUsage) - 100).toFixed(2),
          );
          const calculatedCost = parseFloat(calculatedUsage * pricePerMeasurement);
          const actualCost = parseFloat(actualUsage * pricePerMeasurement);

          return ({
            item: itemId,
            measurement,
            price_per_measurement: pricePerMeasurement.toFixed(2),
            calculated_usage: calculatedUsage.toFixed(2),
            actual_usage: actualUsage.toFixed(2),
            usage_percentage_diffrence: usagePerctDif.toFixed(2),
            calculated_cost: calculatedCost.toFixed(2),
            actual_cost: (actualCost).toFixed(2),
            cost_doller_diffrence: (actualCost - calculatedCost).toFixed(2),
          });
        }

        return ({
          item: itemId,
          measurement,
          price_per_measurement: 1.5,
          calculated_usage: 0,
          actual_usage: 0,
          usage_percentage_diffrence: 0,
          calculated_cost: 0,
          actual_cost: 0,
          cost_doller_diffrence: 0,
        });
      });

      const startDate = InventoryConroller.getPreviousMonday();
      const endDate = new Date();
      endDate.setDate(startDate.getDate() + 6);

      const create = await inventoryModel.create({
        inventory: list,
        start_date: startDate,
        end_date: endDate,
      });

      if (!create) {
        const err = new Error('was unable to post inventory');
        err.status = 500;
        throw err;
      }

      res.status(200).json({ message: 'inventory was posted successfully' });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }
}

module.exports = InventoryConroller;
