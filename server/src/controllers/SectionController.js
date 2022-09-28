const { sectionModel } = require('../models');

class SectionController {
  static async getAllSections(req, res, next) {
    try {
      const sectionList = await sectionModel.find({});

      if (!sectionList) {
        const err = new Error('was unable to locate section list');
        err.status = 400;
        throw err;
      }

      res.status(200).json({ sectionList });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async addNewSection(req, res, next) {
    try {
      const { name } = req.body;
      const section = await sectionModel.create({
        name,
      });

      if (section) {
        const err = new Error('was unable to create section');
        err.status = 500;
        throw err;
      }

      res.status(201).json({ data: section, message: 'Section was created successfully' });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async updateOneSection(req, res, next) {
    try {
      const { id, name } = req.body;
      const { modifiedCount, matchedCount } = await sectionModel.updateOne({ _id: id }, { name });

      if (modifiedCount !== 1 || matchedCount !== 1) {
        const err = new Error('was unable to update section');
        err.status = 500;
        throw err;
      }

      const sectionList = await sectionModel.find({});

      if (!sectionList) {
        const err = new Error(' was unable to location section list');
        err.status = 500;
        throw err;
      }

      res.status(200).json({ data: sectionList, message: 'Updated successfully' });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async deleteSectionById(req, res, next) {
    try {
      const { id } = req.params;
      const { acknowledged, deletedCount } = await sectionModel.deleteOne({ _id: id });

      if (!acknowledged || deletedCount !== 1) {
        const err = new Error('was unable to delete section');
        err.status = 500;
        throw err;
      }

      const sectionList = await sectionModel.find({});
      if (!sectionList) {
        const err = new Error('was unable to find section list');
        err.status = 400;
        throw err;
      }

      res.status(200).json({ data: sectionList, message: 'Section Deleted Successfully' });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }
}

module.exports = SectionController;
