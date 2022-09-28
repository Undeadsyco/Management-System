const jwt = require('jsonwebtoken');
const userModel = require('../models/employee/managementUsers');

const managementAuth = {
  signUser: (user) => {
    const token = jwt.sign(
      {
        objectId: user._id,
        userId: user.employee._id,
        password: user.password,
      },
      'secretKey',
      { expiresIn: '1h' },
    );

    return token;
  },
  verifyUser: async (token) => {
    try {
      const decoded = jwt.verify(token, 'secretKey');
      const user = await userModel.findById(decoded.objectId);
      if (!user) throw new Error('no user found');
      if (decoded.password !== user.password) throw new Error('passwords did not match');
      return true;
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return false;
      }
      console.log(error);
      return false;
    }
  },
};

module.exports = managementAuth;
