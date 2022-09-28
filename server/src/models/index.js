const breakInModel = require('./employee/breakInTimes');
const breakOutModel = require('./employee/breakOutTimes');
const ClockInModel = require('./employee/clock_in_times');
const ClockOutModel = require('./employee/clock_out_times');
const doughInventoryModel = require('./inventory/doughInventory');
const doughModel = require('./menu/dough');
const employeeModel = require('./employee/employee');
const inventoryModel = require('./inventory/inventory');
const managementUsersModel = require('./employee/managementUsers');
const orderModel = require('./inventory/order');
const pizzaModel = require('./menu/pizzas');
const sectionModel = require('./menu/sections');
const toppingInventoryModel = require('./inventory/toppingInventory');
const toppingsModel = require('./menu/topping');

module.exports = {
  breakInModel,
  breakOutModel,
  ClockInModel,
  ClockOutModel,
  doughInventoryModel,
  doughModel,
  employeeModel,
  inventoryModel,
  managementUsersModel,
  orderModel,
  pizzaModel,
  sectionModel,
  toppingInventoryModel,
  toppingsModel,
};
