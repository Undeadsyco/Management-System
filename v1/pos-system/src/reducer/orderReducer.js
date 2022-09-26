/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
const initialState = {
  previousOrder: {},
  name: '',
  phoneNumber: '',
  list: [],
  subtotal: 0,
  tax: 0,
  total: 0,
  grossTotal: 0,
  modifiedPizza: {},
  modifiedTopping: '',
  discounts: [],
  paid: 0,
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_ORDER':
      action.pizza.setIndex(state.list.length);
      return {
        ...state,
        list: [
          ...state.list,
          action.pizza,
        ],
        subtotal: state.subtotal + action.pizza.price,
        grossTotal: state.grossTotal + action.pizza.price,
        tax: state.tax + (action.pizza.price * 0.085),
        total: state.total + (action.pizza.price + (action.pizza.price * 0.085)),
      };
    case 'RESTART_ORDER':
      return {
        ...state,
        name: '',
        phoneNumber: '',
        list: [],
        subtotal: 0,
        tax: 0,
        total: 0,
        grossTotal: 0,
        modifiedPizza: {},
        discounts: [],
        paid: 0,
      };
    case 'SELECT_PIZZA':
      return {
        ...state,
        modifiedPizza: action.obj,
      };
    case 'DELETE_PIZZA':
      if (!state.modifiedPizza) alert('please select pizza to be deleted');
      const pizzaList = state.list.filter((item) => item.index !== state.modifiedPizza.index);
      pizzaList.forEach((pizza, index) => {
        pizza.setIndex(index);
      });
      return {
        ...state,
        modifiedPizza: {},
        list: pizzaList,
        subtotal: state.subtotal - state.modifiedPizza.price,
        grossTotal: state.grossTotal - state.modifiedPizza.price,
        tax: state.tax - (state.modifiedPizza.price * 0.085),
        total: state.total - (state.modifiedPizza.price + (state.modifiedPizza.price * 0.085)),
      };
    case 'ADD_COMMENT':
      state.modifiedPizza.addComment(action.item);
      return {
        ...state,
      };
    case 'REMOVE_COMMENT':
      state.modifiedPizza.removeComment(action.item);
      return {
        ...state,
      };
    case 'ADD_DISCOUNT':
      const { type, value } = action.data;
      return {
        ...state,
        discounts: [...state.discounts, { type, value }],
        subtotal: state.subtotal - value,
        tax: state.tax - (parseInt(value, 10) * 0.085),
        total: state.total - (parseInt(value, 10) + (parseInt(value, 10) * 0.085)),
      };
    case 'ADD_PECENTAGE_DISCOUNT':
      return {
        ...state,
        discounts: [...state.discounts, { type: action.data.type, value: (state.subtotal * (action.data.value / 100)).toFixed(2) }],
        subtotal: state.subtotal - (state.subtotal * (action.data.value / 100)),
        tax: state.tax - (state.tax * (action.data.value / 100)),
        total: state.total - (state.total * (action.data.value / 100)),
      };
    case 'ADD_PAYMENT':
      return {
        ...state,
        paid: state.paid + action.data,
      };
    case 'ADD_TOPPING':
      state.modifiedPizza.addTopping(action.item);
      return {
        ...state,
        subtotal: state.subtotal + 1.5,
        grossTotal: state.grossTotal + 1.5,
        tax: state.tax + (1.5 * 0.085),
        total: state.total + (1.5 + (1.5 * 0.085)),
      };
    case 'REMOVE_TOPPING':
      state.modifiedPizza.removeTopping(action.item);
      return {
        ...state,
        subtotal: state.subtotal - 1.5,
        grossTotal: state.grossTotal - 1.5,
        tax: state.tax - (1.5 * 0.085),
        total: state.total - (1.5 + (1.5 * 0.085)),
      };
    case 'SET_NAME':
      return {
        ...state,
        name: action.data,
      };
    case 'SUBMIT_ORDER':
      return {
        ...state,
        previousOrder: {
          name: state.name,
          phoneNumber: state.phoneNumber,
          list: state.list,
          subtotal: state.subtotal,
          grossTotal: state.grossTotal,
          tax: state.tax,
          total: state.total,
          modifiedPizza: state.modifiedPizza,
          discounts: state.discounts,
          paid: state.paid,
        },
        name: '',
        phoneNumber: '',
        list: [],
        subtotal: 0,
        grossTotal: 0,
        tax: 0,
        total: 0,
        modifiedPizza: {},
        discounts: [],
        paid: 0,
      };
    case 'REPEAT_ORDER':
      return {
        ...state,
        name: state.previousOrder.name,
        phoneNumber: state.previousOrder.phoneNumber,
        list: state.previousOrder.list,
        subtotal: state.previousOrder.subtotal,
        grossTotal: state.previousOrder.grossTotal,
        tax: state.previousOrder.tax,
        total: state.previousOrder.total,
        discounts: state.previousOrder.discounts,
      };
    default:
      return {
        ...state,
      };
  }
};

export default order;
