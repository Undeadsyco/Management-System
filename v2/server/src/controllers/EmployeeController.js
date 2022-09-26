const {
  employeeModel, ClockInModel, ClockOutModel, breakInModel, breakOutModel,
} = require('../models');

const auth = require('../utils/pos_authorization');
const calcHrDif = require('../utils/calculateHourDif');

class EmployeeController {
  static async addNewEmployee(req, res, next) {
    try {
      const employee = await employeeModel.create(req.body);
      if (!employee) {
        const err = new Error();
        err.status = 500;
        throw err;
      }

      res.json({ message: 'employee added sucessfully', employee });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async getAllEmployees(req, res, next) {
    try {
      const employees = await employeeModel.find({});
      if (!employees) {
        const err = new Error();
        err.status = 500;
        throw err;
      }

      res.status(200).json({ employees });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async posSystemEmployeeLogin(req, res, next) {
    try {
      const id = req.body.pin.slice(0, 4);
      const password = req.body.pin.slice(4);

      const employee = await employeeModel.findOne(
        { employee_id: id },
        'employee_name position is_clocked_in is_on_break password',
      );
      if (employee && employee.password === password) {
        const token = auth.signUser(employee);
        if (token) {
          res.header('Content-Type', 'application/json');
          res.cookie('jwt', token);
          res.status(200).json({ employee });
        }
      }
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async employeeClockIn(req, res, next) {
    try {
      const token = req.cookies.jwt;
      const employee = await auth.varifyUser(token);
      if (employee) {
        await ClockInModel.create({ employee: employee._id });
        employeeModel.findByIdAndUpdate(employee._id, { is_clocked_in: true }, (err) => {
          if (err) next({ err });
          else {
            next({ status: 'successful' });
            res.status(200).json({ message: 'Clock In was successful' });
          }
        });
      }
      res.status(200).end();
    } catch (error) {
      next({ error });
    }
  }

  static async checkEmployeeClockedInStatus(req, res, next) {
    try {
      const token = req.cookies.jwt;
      const employee = await auth.varifyUser(token);
      res.status(200).json({ employee });
      next({ status: 'successful' });
      res.status(200).end();
    } catch (error) {
      next({ error });
    }
  }

  static async employeeClockOut(req, res, next) {
    try {
      await employeeModel.updateOne(
        { _id: req.body.id },
        { is_clocked_in: false },
      );
      await ClockOutModel.create({ employee: req.body.id });
      res.status(200).end();
    } catch (error) {
      next({ error });
    } finally {
      res.cookie('jwt', '', { expires: new Date(0) }).end();
      next({ status: 'successful' });
    }
  }

  static async employeeBreakOut(req, res, next) {
    try {
      const { id } = req.body;

      await employeeModel.updateOne({ _id: id }, { is_on_break: true });
      await breakOutModel.create({ employee: id });
      res.status(200).end();
    } catch (error) {
      next({ error });
    }
  }

  static async employeeBreakIn(req, res, next) {
    try {
      const { id } = req.body;

      await employeeModel.updateOne({ _id: id }, { is_on_break: false });
      await breakInModel.create({ employee: id });
      res.status(200).end();
    } catch (error) {
      next({ error });
    }
  }

  static async getEmployeeTimes(req, res, next) {
    try {
      const today = new Date();
      today.setHours(0);

      let employees = await employeeModel.aggregate([
        {
          $lookup: {
            from: 'clock_in_times',
            let: {
              id: '$_id',
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ['$employee', '$$id'] },
                      { $gt: ['$clocked_in_at', `${today}`] },
                    ],
                  },
                },
              },
            ],
            as: 'clock_in_time',
          },
        },
        {
          $lookup: {
            from: 'clock_out_times',
            let: {
              id: '$_id',
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ['$employee', '$$id'] },
                      { $gt: ['$clocked_in_at', `${today}`] },
                    ],
                  },
                },
              },
            ],
            as: 'clock_out_time',
          },
        },
        {
          $lookup: {
            from: 'break_out_times',
            let: {
              id: '$_id',
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ['$employee', '$$id'] },
                      { $gt: ['$break_out_time', `${today}`] },
                    ],
                  },
                },
              },
            ],
            as: 'break_out_time',
          },
        },
        {
          $lookup: {
            from: 'break_in_times',
            let: {
              id: '$_id',
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ['$employee', '$$id'] },
                      { $gt: ['$break_in_time', `${today}`] },
                    ],
                  },
                },
              },
            ],
            as: 'break_in_time',
          },
        },
        {
          $project: {
            employee_name: 1,
            position: 1,
            clock_in_time: 1,
            clock_out_time: 1,
            break_out_time: 1,
            break_in_time: 1,
          },
        },
      ]);

      if (employees) {
        employees = employees.map((employee) => {
          const {
            _id, position,
          } = employee;
          return ({
            _id,
            position,
            employeeName: employee.employee_name,
            clockedInAt: employee.clock_in_time[0],
            clockedOutAt: employee.clock_out_time[0],
            breakOutAt: employee.break_out_time[0],
            breakInAt: employee.break_in_time[0],
            hoursWorked: calcHrDif(
              employee.clock_in_time[0]?.clocked_in_at,
              employee.clock_out_time[0]?.clocked_out_at,
            ),
            breakLength: calcHrDif(
              employee.break_out_time[0]?.break_out_time,
              employee.break_in_time[0]?.break_in_time,
            ),
          });
        });
      }

      res.status(200).json({ employeeTimes: employees });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }

  static async editEmployeeTimes(req, res, next) {
    try {
      const { timeType } = req.params;
      const { timeToEditId, editedTime } = req.body;

      let update;
      switch (timeType) {
        case 'clock_in':
          update = await ClockInModel.updateOne(
            { _id: timeToEditId },
            { clocked_in_at: new Date(editedTime) },
          );
          break;
        case 'clock_out':
          update = await ClockOutModel.updateOne(
            { _id: timeToEditId },
            { clocked_out_at: new Date(editedTime) },
          );
          break;
        case 'break_in':
          update = await breakInModel.updateOne(
            { _id: timeToEditId },
            { break_in_time: new Date(editedTime) },
          );
          break;
        case 'break_out':
          update = await breakOutModel.updateOne(
            { _id: timeToEditId },
            { break_out_time: new Date(editedTime) },
          );
          break;
        default:
          break;
      }

      const { modifiedCount, matchedCount } = update;

      res.status(200).json({ matchedCount, modifiedCount });
      next({ status: 'successful' });
    } catch (error) {
      next({ error });
    }
  }
}

module.exports = EmployeeController;
