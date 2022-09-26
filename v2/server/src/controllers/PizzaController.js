const { Types: { ObjectId } } = require('mongoose');
const { pizzaModel, sectionModel } = require('../models');

class PizzaController {
  static async getPizzasList(req, res, next) {
    try {
      const pizzaList = await pizzaModel.find({})
        .populate('section')
        .populate('toppings')
        .populate('sizes.dough');

      if (!pizzaList) {
        const err = new Error('could not find any pizzas');
        err.status = 500;
        throw err;
      }
      res.status(200).json({ pizzaList });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async getPizzaListBySection(req, res, next) {
    try {
      const { section } = req.params;
      const selectedSection = await sectionModel.findOne({ name: section });
      if (!selectedSection) {
        const err = new Error('could not find section');
        err.status = 500;
        throw err;
      }

      const pizzaList = await pizzaModel.find({ section: selectedSection._id })
        .populate('section')
        .populate('toppings')
        .populate('sizes.dough');

      if (!pizzaList) {
        const err = new Error('could not find pizzas');
        err.status = 500;
        throw err;
      }

      res.status(200).json({ pizzaList });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async getPizzaListBySize(req, res, next) {
    try {
      const { doughId } = req.params;

      if (!doughId) {
        const err = new Error();
        err.status = 500;
        err.message = 'please provide dough id';
        throw err;
      }

      const pizzaList = await pizzaModel.find(
        { sizes: { $elemMatch: { dough: doughId } } },
        { name: 1, section: 1 },
      ).populate('section');

      if (!pizzaList) {
        const err = new Error();
        err.status = 500;
        err.message = 'could not find any pizzas in this size';
        throw err;
      }

      res.status(200).json({ pizzaList });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async getStuffedPizzaList(req, res, next) {
    try {
      const section = await sectionModel.findOne({ name: 'Stuffed' });

      if (!section) {
        const err = new Error('was unable to find stuffed section');
        err.status = 500;
        throw err;
      }

      const pizzaList = await pizzaModel.find({ section: section._id }).populate('section');

      if (!pizzaList) {
        const err = new Error('was unable to find stuffed pizzas');
        err.status = 500;
        throw err;
      }

      res.status(200).json({ pizzaList });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async getSinglePizzaById(req, res, next) {
    try {
      const pizza = await pizzaModel.aggregate([
        {
          $match: {
            $and: [
              { _id: new ObjectId(req.params.pizzaId) },
              {
                sizes: {
                  $elemMatch: { dough: new ObjectId(req.params.doughId) },
                },
              },
            ],
          },
        },
        {
          $project: {
            name: 1,
            toppings: 1,
            sizes: {
              $filter: {
                input: '$sizes',
                as: 'size',
                cond:
                {
                  $and: [
                    { $eq: ['$$size.dough', new ObjectId(req.params.doughId)] },
                  ],
                },
              },
            },
          },
        },
      ]);

      if (!pizza) {
        const err = new Error('Unable to find pizza');
        err.status = 500;
        throw err;
      }

      const fullPizza = await pizzaModel.populate(pizza, { path: 'toppings sizes.dough' });

      res.status(200).json(fullPizza);
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async createNewPizza(req, res, next) {
    try {
      const newPizza = await pizzaModel.create(req.body);
      if (!newPizza) throw new Error('could not create pizza');

      const section = await sectionModel.findById(newPizza.section);
      if (!section) throw new Error('was unable to find section');

      const { modifiedCount, matchedCount } = await sectionModel.updateOne(
        { _id: section._id },
        { pizzas: [...section.pizzas, newPizza._id] },
      );
      if (modifiedCount !== 1 || matchedCount !== 1) throw new Error('was unable to add pizza to section');

      const pizza = await pizzaModel.findById(newPizza._id)
        .populate('section')
        .populate('toppings')
        .populate('sizes.dough');

      res.status(201).json({ message: 'pizza was added to the section successfully', pizza });
      next({ status: 'seccessful' });
    } catch (error) {
      next({ error });
    }
  }
}

module.exports = PizzaController;
