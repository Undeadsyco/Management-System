const express = require('express');
const router = express.Router();
const models = require('../../models');
const { Op } = require('sequelize');

router.get('/all/employees', async (req, res) => {
  try {
    const employees = await models.employee.findAll({
      attributes: ['Employee_Id', 'Employee_name']
    })

    res.send(JSON.stringify({ status: 200, data: { employees } }))
  } catch (err) {
    res.send(JSON.stringify({ status: 500, message: err.message }))
  }
})

router.post('/login', (req, res, next) => {
  let pin = req.body.pin;
  let id = pin.substr(0, 4);
  let password = pin.substr(4);

  try {
    models.employee.findOne({
      where: { Employee_Id: id }
    }).then(user => {
      if (!user) {
        res.header('Content-Type', 'application/json')
        res.send(JSON.stringify({ status: false, message: 'Incorrect User' }))
      }

      if (parseInt(user.Password) !== parseInt(password)) {
        res.header('Content-Type', 'application/json')
        res.send(JSON.stringify({ status: false, message: 'Incorrect Password' }))
      }

      res.header('Content-Type', 'application/json')
      res.send(JSON.stringify({
        status: true,
        user
      }))
    })
  } catch (error) {
    res.send(JSON.stringify({ error, status: 500 }))
  }
})

router.post('/clock-in', (req, res) => {
  models.clock_in_times.create({
    Employee_Id: req.body.empId,
    Time_In: new Date(),
  }).then((result) => {
    models.employee.update(
      { Is_Clocked_In: 1 },
      { where: { Employee_Id: result.Employee_Id } },
    ).then(() => {
      models.employee.findOne({
        where: { Employee_Id: result.Employee_Id }
      }).then(user => {
        res.header('Content-Type', 'application/json')
        res.send(JSON.stringify({ status: 200, user }))
      })
    })
  })
})

router.post('/clock-out', (req, res) => {
  models.clock_out_times.create({
    Employee_Id: req.body.empId,
    Time_In: new Date(),
  }).then((result) => {
    models.employee.update(
      { Is_Clocked_In: 0 },
      { where: { Employee_Id: result.Employee_Id } },
    ).then(() => {
      res.send(JSON.stringify({ message: 'successful' }))
    })
  })
});

router.post('/break-out', async (req, res) => {
  const breakOut = await models.break_out_times.create({
    Employee_Id: req.body.empId,
    Break_Time_Out: new Date()
  })

  if (breakOut) {
    models.employee.update(
      { Is_On_Break: 1 },
      { where: { Employee_Id: req.body.empId } }
    ).then(() => {
      res.send(JSON.stringify({ message: 'successful' }))
    })
  }
});

router.post('/break-in', async (req, res) => {
  const breakIn = await models.break_in_times.create({
    Employee_Id: req.body.empId,
    Break_Time_In: new Date()
  })

  if (breakIn) {
    models.employee.update(
      { Is_On_Break: 0 },
      { where: { Employee_Id: req.body.empId } }
    ).then(async () => {
      const user = await models.employee.findOne({
        where: { Employee_Id: req.body.empId }
      })

      res.send(JSON.stringify({ status: 200, user }))
    })
  }
});

router.put('/update-password', async (req, res) => {
  console.log(req.body);
  try {
    const user = await models.employee.findOne({
      where: { Employee_Id: req.body.empId },
      attributes: ['Employee_Id', 'Password']
    })

    if (user.Password !== req.body.Password) {
      console.log(user.Password)
      res.send(JSON.stringify({ status: 500, message: 'incorrect password' }));
      return;
    }

    models.employee.update(
      { Password: req.body.newPassword },
      { where: { Employee_Id: req.body.empId } }
    ).then((data) => {
      if (data[0] === 1) {
        res.send(JSON.stringify({ status: 200, data, message: 'successful' }));
      } else {
        res.send(JSON.stringify({ status: 500, message: 'something went wrong' }));
      }
    });
  } catch (err) {
    res.send(JSON.stringify({ status: 500, message: err.message }))
  }
});

router.put('/clear-password', async (req, res) => {
  try {
    models.employee.update(
      { Password: 0000 },
      { where: { Employee_Id: req.body.empId } }
    ).then((data) => {
      res.send(JSON.stringify({ status: 200, data }))
    })
  } catch (err) {
    res.send(JSON.stringify({ status: 500, message: err.message }))
  }
});

router.get('/times', async (req, res) => {
  const date = new Date();
  try {
    const employees = await models.employee.findAll({ attributes: ['Employee_Id', 'Is_Clocked_In'] })

    if (!employees) {
      throw new Error('No Employees Were Found');
    }

    const employeesWithTimes = []
    for (let i = 0; i < employees.length; i++) {
      let employee;
      if (employees[i].Is_Clocked_In === 1) {
        employee = await models.employee.findOne({
          where: { Employee_Id: employees[i].Employee_Id },
          attributes: ['Employee_Id', 'Employee_name'],
          include: [
            {
              model: models.clock_in_times,
              where: { Time_In: { [Op.gt]: new Date(date.getFullYear(), date.getMonth(), date.getDate()) } },
              attributes: ['Id', 'Time_In']
            }
          ]
        })
      } else {
        employee = await models.employee.findOne({
          where: { Employee_Id: employees[i].Employee_Id },
          attributes: ['Employee_Id', 'Employee_name'],
          include: [
            {
              model: models.clock_in_times,
              where: { Time_In: { [Op.gt]: new Date(date.getFullYear(), date.getMonth(), date.getDate()) } },
              attributes: ['Id', 'Time_In']
            },
            {
              model: models.clock_out_times,
              where: { Time_Out: { [Op.gt]: new Date(date.getFullYear(), date.getMonth(), date.getDate()) } },
              attributes: ['Id', 'Time_Out']
            }
          ]
        })
      }

      employeesWithTimes.push(employee)

    }

    res.send(JSON.stringify({ status: 500, data: { employeesWithTimes } }))
  } catch (err) {
    res.send(JSON.stringify({ status: 500, message: err.message }))
  }
})

router.get('/break-times', async (req, res) => {
  const date = new Date()
  try {
    const employeesWithTimes = [];
    const employees = await models.employee.findAll({
      attributes: ['Employee_Id', 'Is_On_Break']
    })

    for (let employee of employees) {
      let employeeWithTimes;
      if (employee.Is_On_Break === 1) {
        employeeWithTimes = await models.employee.findOne({
          where: { Employee_Id: employee.Employee_Id },
          attributes: ['Employee_Id', 'Employee_name'],
          include: {
            model: models.Break_Time_Out,
            where: { Break_Time_Out: { [Op.gt]: new Date(date.getFullYear(), date.getMonth(), date.getDate()) } },
            attributes: ['Id', 'Break_Time_In']
          }
        })
      }
      if (employee.Is_On_Break === 0) {
        employeeWithTimes = await models.employee.findOne({
          where: { Employee_Id: employee.Employee_Id },
          attributes: ['Employee_Id', 'Employee_name'],
          include: [
            {
              model: models.break_out_times,
              where: { Break_Time_Out: { [Op.gt]: new Date(date.getFullYear(), date.getMonth(), date.getDate()) } },
              attributes: ['Id', 'Break_Time_Out']
            },
            {
              model: models.break_in_times,
              where: { Break_Time_In: { [Op.gt]: new Date(date.getFullYear(), date.getMonth(), date.getDate()) } },
              attributes: ['Id', 'Break_Time_In']
            }
          ]
        })
      }
      employeesWithTimes.push(employeeWithTimes);
    }
    res.send(JSON.stringify({ status: 200, data: { employeesWithTimes } }))
  } catch (err) {
    res.send(JSON.stringify({ status: 500, message: err.message }))
  }
})

router.put('/change-time', async (req, res) => {
  try {
    let result;
    if (req.body.type === 'Clock In Time') {
      result = await models.clock_in_times.update(
        { Time_In: new Date(req.body.date) },
        {
          where: {
            [Op.and]: [
              { Id: req.body.timeId },
              { Employee_Id: req.body.empId }
            ]
          }
        }
      )
    }
    if (req.body.type === 'Clock Out Time') {
      result = await models.clock_out_times.update(
        { Time_Out: new Date(req.body.date) },
        {
          where: {
            [Op.and]: [
              { Id: req.body.timeId },
              { Employee_Id: req.body.empId }
            ]
          }
        }
      )
    }
    if (req.body.type === 'Break Out Time') {
      result = await models.break_out_times.update(
        { Break_Time_Out: new Date(req.body.date) },
        {
          where: {
            [Op.and]: [
              { Id: req.body.timeId },
              { Employee_Id: req.body.empId },
            ]
          }
        }
      );
    }
    if (req.body.type === 'Break In Time') {
      result = await models.break_in_times.update(
        { Break_Time_In: new Date(req.body.date) },
        {
          where: {
            [Op.and]: [
              { Id: req.body.timeId },
              { Employee_Id: req.body.empId },
            ]
          }
        }
      );
    }

    res.send(JSON.stringify({ result }))
  } catch (err) {
    res.send(JSON.stringify({ status: 500, message: err.message }))
  }
})

module.exports = router;