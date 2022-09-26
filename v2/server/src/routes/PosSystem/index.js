const path = require('path');
const express = require('express');

const employeeRoute = require('./employee');
const menuRouter = require('./menu');
const orderRouter = require('./order');

const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, '../../../clients/pos_client/build', 'index.html'));
    next({ status: 'successful' });
  } catch (error) {
    next({ error });
  }
});

router.use('/', express.static(path.join(__dirname, '../../../clients/pos_client/build')));

router.use('/employee_actions', employeeRoute);
router.use('/menu_actions', menuRouter);
router.use('/order_actions', orderRouter);

router.get('/destroy_token', (req, res) => {
  res.cookie('jwt', '', { expires: new Date(0) }).end();
});

router.get('/*', (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, '../../../clients/pos_client/build', 'index.html'));
    next({ status: 'successful' });
  } catch (error) {
    next({ error });
  }
});

module.exports = router;
