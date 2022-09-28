const express = require('express');
const path = require('path');

const doughRouter = require('./dough');
const employeeRouter = require('./employees');
const inventoryRouter = require('./inventory');
const orderRouter = require('./order');
const pizzaRouter = require('./pizzas');
const sectionRouter = require('./section');
const toppingRouter = require('./toppings');
const userRouter = require('./user');

const managementAuth = require('../../utils/management_authorization');
const { managementUsersModel: userModel } = require('../../models');

const router = express.Router();

router.get('/', (req, res, next) => {
  // res.send('hit route path /management_system');
  try {
    res.sendFile(path.join(__dirname, '../../../clients/management_system/build', 'index.html'));
    next({ status: 'successful' });
  } catch (error) {
    next({ error });
  }
});

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username }).populate('employee', 'employee_name position');

  if (!user) res.status(401);
  if (user.password !== password) res.status(401);

  const token = managementAuth.signUser(user);
  if (token) {
    res.cookie('managementToken', token);
    res.status(200).json({ message: 'Login was successful', user: user.employee });
  } else {
    res.status(500).json({ message: 'There was a problem logging you in!' });
  }

  next({ status: 'successful' });
});

router.get('/verify_token', async (req, res, next) => {
  const token = req.cookies.managementToken;
  if (!token) res.status(401);
  else {
    const isAuthorized = await managementAuth.verifyUser(token);
    if (isAuthorized) res.status(200).json({ authorized: true });
    else res.status(401);
  }
  next({ status: 'successful' });
});

router.get('/logout', (req, res, next) => {
  res.cookie('managementToken', '', { expires: new Date(0) });
  res.status(200).json({ message: 'logged out successfully' });
  next({ status: 'successful' });
});

router.use('/', express.static(path.join(__dirname, '../../../clients/management_system/build')));

router.use('/dough_actions', doughRouter);
router.use('/employee_actions', employeeRouter);
router.use('/inventory_actions', inventoryRouter);
router.use('/order_actions', orderRouter);
router.use('/pizza_actions', pizzaRouter);
router.use('/section_actions', sectionRouter);
router.use('/topping_actions', toppingRouter);
router.use('/user_actions', userRouter);

router.get('/*', (req, res, next) => {
  // res.send('hit route path /management_system');
  try {
    res.sendFile(path.join(__dirname, '../../../clients/management_system/build', 'index.html'));
    next({ status: 'successful' });
  } catch (error) {
    next({ error });
  }
});

module.exports = router;
