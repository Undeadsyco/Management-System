/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes, { checkPropTypes } from 'prop-types';

import LockScreen from './views/lockScreen/lockScreen';
import ClockInView from './views/clockInView/clockInView';
import DrawerView from './views/drawerView/drawerView';
import MenuScreen from './views/menu/menuScreen';
import OrderListView from './views/orderListView/orderListView';
import ReportView from './views/reportView/reportView';
import TimesView from './views/timesView/timesView';
import UserListView from './views/userListView/userListView';
import NumberPadView from './components/numberPadView';
import PrivateRoute from './components/privateRoute';
import KeyBoard from './components/keyboard';

import {
  userActions, menuActions, orderActions, inventoryActions,
} from './actions';

import './App.css';

const $App = (props) => {
  const {
    onGetSizes, onGetPizzasBySize, onGetToppings,
  } = props;

  useEffect(() => {
    onGetSizes();
    onGetPizzasBySize(2);
    onGetToppings();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LockScreen {...props} />} />
        <Route path="/clock-in" element={<ClockInView {...props} />} />
        <Route element={<PrivateRoute {...props} />}>
          <Route path="/menu/*" element={<MenuScreen {...props} />} />
          <Route path="/numberPad" element={<NumberPadView {...props} />} />
          <Route path="/closed-orders" element={<OrderListView {...props} />} />
          <Route path="/report" element={<ReportView {...props} />} />
          <Route path="/keyboard" element={<KeyBoard {...props} />} />
          <Route path="/employee-list" element={<UserListView {...props} />} />
          <Route path="/times" element={<TimesView {...props} />} />
          <Route path="/drawer-view" element={<DrawerView {...props} />} />
        </Route>
      </Routes>
    </div>
  );
};

$App.defaultProps = {
  onGetSizes: checkPropTypes(),
  onGetPizzasBySize: checkPropTypes(),
  onGetToppings: checkPropTypes(),
};

$App.propTypes = {
  onGetSizes: PropTypes.func,
  onGetPizzasBySize: PropTypes.func,
  onGetToppings: PropTypes.func,
};

const mapStateToProps = (state) => ({
  // user state
  user: state.user.user,
  employees: state.user.employees,
  times: state.user.times,
  timesType: state.user.timesType,
  // application state
  numberPadType: state.actions.numberPadType,
  keyboardType: state.actions.keyboardType,
  discountType: state.actions.discountType,
  listAction: state.actions.listAction,
  // menu state
  sizes: state.menu.sizes,
  currentSize: state.menu.currentSize,
  pizzas: state.menu.pizzas,
  selectedPizza: state.menu.selectedPizza,
  toppings: state.menu.toppings,
  stuffedPizzas: state.menu.stuffedPizzas,
  xlPizzas: state.menu.xlPizzas,
  // order state
  orderList: state.order.list,
  subtotal: state.order.subtotal,
  tax: state.order.tax,
  total: state.order.total,
  discounts: state.order.discounts,
  paid: state.order.paid,
  name: state.order.name,
  order: state.order,
  modifiedPizza: state.order.modifiedPizza,
  // inventory state
  closedWalkins: state.inventory.closedWalkins,
  queriedOrder: state.inventory.queriedOrder,
  reports: state.inventory.reports,
  totalReport: state.inventory.totalReport,
  registers: state.inventory.registers,
  selectedRegister: state.inventory.selectedRegister,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch, state) => {
  const {
    getAllEmployees, login, clockIn, clockOut, getTimes, breakOut,
    breakIn, changePassword, clearPassword, changeTime, getBreakTimes,
  } = userActions;

  const { addToOrder, submitOrder } = orderActions;

  const {
    getClosedWalkins, getOrderById, getReport, getRegisters, assignRegister,
  } = inventoryActions;

  const {
    getSizes, getPizzasBySize, getStuffedPizzas, getXlPizzas, getPizzaById, getToppings,
  } = menuActions;

  return {
    // user actions
    onGetAllEmployees: () => getAllEmployees().then((data) => dispatch({ type: 'GET_ALL_EMPLOYEES', data })),
    onLogin: (pin) => login(pin),
    onClockIn: (empId) => clockIn(empId),
    onClockOut: (empId) => clockOut(empId).then((data) => dispatch({ type: 'CLOCK_OUT', data })),
    onBreakOut: (empId) => breakOut(empId),
    onBreakIn: (empId) => breakIn(empId),
    onChangePassword: (user, newPassword) => changePassword(user, newPassword),
    onClearPassword: (empId) => clearPassword(empId),
    onChangeTime: (body) => changeTime(body),
    onGetTimes: () => getTimes().then(
      (data) => dispatch({ type: 'GET_TIMES', data: { ...data, type: 'clockin/clockout' } }),
    ),
    onGetBreakTimes: () => getBreakTimes().then(
      (data) => dispatch({ type: 'GET_TIMES', data: { ...data, type: 'breakout/breakin' } }),
    ),
    // menu actions
    onGetSizes: () => getSizes().then((data) => dispatch({ type: 'GET_SIZES', data })),
    onGetStuffedPizzas: () => getStuffedPizzas().then((data) => dispatch({ type: 'GET_STUFFED_COMPLETE', data })),
    onGetXlPizzas: () => getXlPizzas().then((data) => dispatch({ type: 'GET_XL_COMPLETE', data })),
    onGetPizzasBySize: (id) => getPizzasBySize(id).then((data) => dispatch({ type: 'GET_PIZZAS_BY_SIZE', data })),
    onGetPizzaById: (size, name) => getPizzaById(size, name).then((data) => dispatch({ type: 'GET_PIZZA_BY_ID', data })),
    onGetToppings: () => getToppings().then((data) => dispatch({ type: 'GET_TOPPINGS', data })),
    // order actions
    onAddToOrder: (size, obj) => dispatch(addToOrder(size, obj)),
    onSubmitOrder: (body) => submitOrder(body).then(() => dispatch({ type: 'SUBMIT_ORDER' })),
    // inventory actions
    onGetClosedWalkins: () => getClosedWalkins().then((data) => dispatch({ type: 'CLOSED_WALK_IN', data })),
    onGetOrderById: (id) => getOrderById(id).then((data) => dispatch({ type: 'GET_ORDER_BY_ID', data })),
    onGetReport: () => getReport().then((data) => dispatch({ type: 'GET_REPORT', data })),
    onGetRegisters: () => getRegisters().then((data) => dispatch({ type: 'GET_REGISTERS', data })),
    onAssignRegister: (empId, id) => assignRegister(empId, id),
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)($App);

export default App;
