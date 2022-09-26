const { toppingsModel } = require('../models');

class ToppingController {
  static async getAllToppings(req, res, next) {
    console.log('hit');
    try {
      const toppingList = await toppingsModel.find({});
      if (toppingList.length === 0) {
        const err = new Error('was unable to locate list of toppings');
        err.status = 400;
      }

      res.status(200).json({ toppingList });
      next({ status: 'successful' });
    } catch (error) {
      console.log('error');
      next({ error });
    }
  }

  static async addMultipleNewTopping(req, res, next) {
    try {
      const toppings = req.body;
      const update = await toppingsModel.insertMany(toppings);

      if (!update) {
        const err = new Error('was unable to add toppings to the database');
        err.status = 500;
        throw err;
      }

      res.status(200).json({ update, message: 'toppings were added successfully' });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async updateAllToppings(req, res, next) {
    try {
      const { toppingList } = req.body;

      const updateTopping = async (topping) => {
        const update = await toppingsModel.findByIdAndUpdate(
          topping._id,
          topping,
        );

        return update;
      };

      for (let i = 0; i < toppingList.length; i += 1) {
        const update = updateTopping(toppingList[i]);

        if (!update) {
          console.log(`unable to update ${toppingList[i].topping}`);
          const err = new Error(`unable to update ${toppingList[i].topping}`);
          err.status = 500;
          throw err;
        }
      }

      res.status(200).end();
    } catch (error) {
      next({ error });
    }
  }
}

module.exports = ToppingController;
