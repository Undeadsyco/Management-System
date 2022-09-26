const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const employeeModel = require('../models/employee/employee');

const auth = {
  signUser: (employee) => {
    const token = jwt.sign(
      {
        objectId: employee._id,
        employeeId: employee.employee_id,
        password: employee.password,
      },
      'secretKey',
      { expiresIn: '8h' },
    );

    return token;
  },
  varifyUser: async (token) => {
    try {
      const decoded = jwt.verify(token, 'secretKey');
      const employee = await employeeModel.findById(
        decoded.objectId,
        'employee_name position is_clocked_in is_on_break',
      );
      return employee;
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) return error;
      return error;
    }
  },

};

module.exports = auth;
