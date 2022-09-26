import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const Auth = {
  sign: async (type, employee) => {
    const token = jwt.sign({
      id: employee['_id'],
      name: employee['name'],
      position: employee['position'],
      isClockedIn: employee['is_clocked_in'],
      isOnBreak: employee['is_on_break'],
      username: employee.accounts[type]?.['username'],
      password: employee.accounts[type]?.['password'],
    }, 'my secret secret key', { expiresIn: '1h' });
    return token;
  }
};

export default Auth;
