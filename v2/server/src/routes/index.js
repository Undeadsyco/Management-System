const router = require('express').Router();

const managementSystemRouter = require('./ManagementSystem');
const posSystemRouter = require('./PosSystem');

router.route('/').get((req, res, next) => {
  res.send("You've hit the main screen! please add '/pos_system' or '/management_system' to the address bar to be redirected to the appropriate client");
  next({ status: 'successful' });
});

router.use('/management_system', managementSystemRouter);
router.use('/pos_system', posSystemRouter);

router.use('/*', (req, res, next) => {
  next({ status: 'successful' });
});

module.exports = router;
