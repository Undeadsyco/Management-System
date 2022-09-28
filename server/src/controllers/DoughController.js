const { doughModel } = require('../models');

class DoughController {
  static async createNewDoughSize(req, res, next) {
    try {
      const size = await doughModel.create(req.body);
      if (!size) {
        const err = new Error();
        err.status = 500;
        throw err;
      }

      res.status(201).json({ size, message: 'dough was added successfully' });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async getAllDoughSizes(req, res, next) {
    try {
      const doughList = await doughModel.find({});
      if (!doughList.length > 0) {
        const err = new Error('unable to locate requested resourses');
        err.status = 400;
        throw err;
      }

      res.status(200).json({ doughList });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async updateDoughSize(req, res, next) {
    try {
      const { id, size, weight } = req.body;
      const update = await doughModel.findByIdAndUpdate(id, { size, weight });

      if (!update) {
        const err = new Error('update unsuccessful');
        err.status = 500;
        throw err;
      }

      const doughList = await doughModel.find({});

      if (!doughList) {
        const err = new Error('could not find dough list');
        err.status = 400;
        throw err;
      }

      res.status(200).json({ data: doughList, message: 'updated succeffully' });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async deleteSizeById(req, res, next) {
    try {
      const { id } = req.params;
      const { acknowledged, deletedCount } = await doughModel.deleteOne({ _id: id });

      if (!acknowledged) {
        const err = new Error('Something went wrong please try again later');
        err.status = 500;
        throw err;
      }

      if (deletedCount !== 1) {
        const err = new Error('was unable to delete dough from database');
        err.status = 500;
        throw err;
      }

      const doughList = await doughModel.find({});

      if (!doughList) {
        const err = new Error('was unable to locate doughlist');
        err.status = 400;
        throw err;
      }

      res.status(200).json({ data: doughList, message: 'dough was deleted successfully' });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }
}

module.exports = DoughController;
