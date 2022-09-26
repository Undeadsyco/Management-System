/* eslint-disable max-len */
import { v4 } from 'uuid';

const orderID = v4();
const initialState = {
  currentOrderIndex: 0,
  currentOrder: {
    orderID,
    name: '',
    pizzaSelectedInOrder: {},
    pizzaList: [],
    comments: [],
    price: 0.00,
    paidAmount: 0.00,
  },
  orderList: [{
    orderID,
    name: '',
    pizzaSelectedInOrder: {},
    pizzaList: [],
    comments: [],
    price: 0.00,
    paidAmount: 0.00,
  }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ORDER_INIT':
      return {
        ...state,
        ...action.data,
      };
    case 'ADD_ORDER_TO_LIST': {
      const id = v4();
      const orderList = [...state.orderList, {
        orderID: id,
        name: '',
        pizzaSelectedInOrder: {},
        pizzaList: [],
        comments: [],
        price: 0.00,
        paidAmount: 0.00,
      }];

      orderList.splice(state.currentOrderIndex, 1, state.currentOrder);
      const currentOrder = {
        orderID: id,
        name: '',
        pizzaSelectedInOrder: {},
        pizzaList: [],
        comments: [],
        price: 0.00,
        paidAmount: 0.00,
      };

      return {
        ...state,
        currentOrderIndex: state.currentOrderIndex + 1,
        currentOrder,
        orderList,
      };
    }
    case 'SWITCH_ORDER': {
      const { orderList, currentOrderIndex, currentOrder } = state;
      orderList.splice(currentOrderIndex, 1, currentOrder);

      const nextOrder = state.orderList[action.data];
      return {
        ...state,
        currentOrderIndex: action.data,
        currentOrder: nextOrder,
        orderList,
      };
    }
    case 'REMOVE_ORDER_FROM_LIST':
      return {
        ...state,
      };
    case 'ADD_NAME_TO_ORDER': {
      const { currentOrder, orderList } = state;
      const index = orderList.indexOf(orderList.filter((item) => item.orderID === currentOrder.orderID)[0]);

      const order = {
        ...currentOrder,
        name: action.data,
      };

      orderList.splice(index, 1, order);

      return {
        ...state,
        currentOrder: order,
        orderList: [...orderList],
      };
    }
    case 'ADD_PIZZA_TO_ORDER': {
      const price = parseFloat((state.currentOrder.price + action.data.size.price).toFixed(2));
      if (state.currentOrder.pizzaList.length === 0) {
        return {
          ...state,
          currentOrder: {
            ...state.currentOrder,
            pizzaList: [{
              orderID: v4(),
              ...action.data,
              addedToppings: [],
              removedToppings: [],
              discount: undefined,
            }],
            price,
          },
        };
      }
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          pizzaList: [...state.currentOrder.pizzaList, {
            orderID: v4(),
            ...action.data,
            addedToppings: [],
            removedToppings: [],
          }],
          price,
        },
      };
    }
    case 'SELECT_PIZZA_IN_ORDER':
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          pizzaSelectedInOrder: action.data,
        },
      };
    case 'REMOVE_ONE_FROM_ORDER': {
      let { price } = action.data.size;
      if (action.data.discount) {
        price += action.data.discount.amount;
      }
      if (action.data?.addedToppings?.length > 0) {
        const diffrence = action.data.addedToppings.length - action.data.removedToppings.length;
        price += (diffrence * 1.5);
      }

      const newPrice = parseFloat((state.currentOrder.price - price).toFixed(2));
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          pizzaSelectedInOrder: {},
          pizzaList: state.currentOrder.pizzaList.filter((pizza) => pizza.orderID !== action.data.orderID),
          price: newPrice,
        },
      };
    }
    case 'REMOVE_ALL_FROM_ORDER': {
      const orderList = [...state.orderList];
      let currentOrder;
      let currentOrderIndex;
      if (state.orderList.length > 1 && state.currentOrderIndex > 0) {
        orderList.splice(state.currentOrderIndex, 1);
        currentOrder = state.orderList[state.currentOrderIndex - 1];
        currentOrderIndex = state.currentOrderIndex - 1;
      } else {
        orderList.splice(state.currentOrderIndex, 1, {
          name: '',
          pizzaSelectedInOrder: {},
          pizzaList: [],
          comments: [],
          price: 0.00,
          paidAmount: 0.00,
        });
        currentOrder = {
          name: '',
          pizzaSelectedInOrder: {},
          pizzaList: [],
          comments: [],
          price: 0.00,
          paidAmount: 0.00,
        };
        currentOrderIndex = state.currentOrderIndex;
      }
      return {
        ...state,
        currentOrderIndex,
        currentOrder,
        orderList,
      };
    }
    case 'ADD_TOPPING_TO_PIZZA': {
      const { currentOrder: { pizzaList, pizzaSelectedInOrder, price } } = state;

      const index = pizzaList.indexOf(pizzaSelectedInOrder);
      const addedToppings = pizzaSelectedInOrder.addedToppings.length > 0
        ? [...pizzaSelectedInOrder.addedToppings, action.data]
        : [action.data];
      const pizza = { ...pizzaSelectedInOrder, addedToppings };

      let newPrice;
      if (pizza.addedToppings.length > pizza.removedToppings.length) {
        newPrice = parseFloat((price + 1.5).toFixed(2));
      } else if (pizza.addedToppings.length <= pizza.removedToppings.length) {
        newPrice = price;
      }

      pizzaList.splice(index, 1, pizza);

      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          pizzaSelectedInOrder: pizza,
          pizzaList: [...pizzaList],
          price: newPrice,
        },
      };
    }
    case 'REMOVE_ADDED_TOPPING': {
      const index = state.currentOrder.pizzaList.indexOf(state.currentOrder.pizzaSelectedInOrder);
      const addedToppings = state.currentOrder.pizzaSelectedInOrder.addedToppings.filter((topping) => topping._id !== action.data._id);
      const pizza = {
        ...state.currentOrder.pizzaSelectedInOrder,
        addedToppings,
      };

      let newPrice;
      if (pizza.addedToppings.length >= pizza.removedToppings.length) {
        newPrice = parseFloat((state.currentOrder.price - 1.5).toFixed(2));
      } else if (pizza.addedToppings.length < pizza.removedToppings.length) {
        newPrice = state.currentOrder.price;
      }

      state.currentOrder.pizzaList.splice(index, 1, pizza);
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          pizzaSelectedInOrder: pizza,
          pizzaList: [...state.currentOrder.pizzaList],
          price: newPrice,
        },
      };
    }
    case 'REMOVE_TOPPING_FROM_PIZZA': {
      const index = state.currentOrder.pizzaList.indexOf(state.currentOrder.pizzaSelectedInOrder);
      const removedToppings = [...state.currentOrder.pizzaSelectedInOrder.removedToppings, action.data];
      const pizza = { ...state.currentOrder.pizzaSelectedInOrder, removedToppings };

      state.currentOrder.pizzaList.splice(index, 1, pizza);

      let newPrice;
      if (pizza.addedToppings.length >= pizza.removedToppings.length) {
        newPrice = parseFloat((state.currentOrder.price - 1.5).toFixed(2));
      } else if (pizza.addedToppings.length < pizza.removedToppings.length) {
        newPrice = state.currentOrder.price;
      }

      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          pizzaSelectedInOrder: pizza,
          pizzaList: [...state.currentOrder.pizzaList],
          price: newPrice,
        },
      };
    }
    case 'RESTORE_TOPPING': {
      const index = state.currentOrder.pizzaList.indexOf(state.currentOrder.pizzaSelectedInOrder);
      const removedToppings = state.currentOrder.pizzaSelectedInOrder.removedToppings.filter((topping) => topping._id !== action.data._id);
      const pizza = { ...state.currentOrder.pizzaSelectedInOrder, removedToppings };
      state.currentOrder.pizzaList.splice(index, 1, pizza);

      let newPrice;
      if (pizza.addedToppings.length > pizza.removedToppings.length) {
        newPrice = parseFloat((state.currentOrder.price + 1.5).toFixed(2));
      } else if (pizza.addedToppings.length <= pizza.removedToppings.length) {
        newPrice = state.currentOrder.price;
      }

      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          pizzaSelectedInOrder: pizza,
          pizzaList: [...state.currentOrder.pizzaList],
          price: newPrice,
        },
      };
    }
    case 'ADD_DISCOUNT_TO_PIZZA': {
      if (!state.currentOrder.pizzaSelectedInOrder.id) {
        alert('please select pizza to add dicount to');
        return { ...state };
      }
      if (state.currentOrder.pizzaSelectedInOrder.discount) {
        alert('discount already applied to this pizza');
        return { ...state };
      }

      const index = state.currentOrder.pizzaList.indexOf(state.currentOrder.pizzaSelectedInOrder);
      const pizza = { ...state.currentOrder.pizzaSelectedInOrder, discount: action.data };
      state.currentOrder.pizzaList.splice(index, 1, pizza);

      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          pizzaSelectedInOrder: pizza,
          pizzaList: [...state.currentOrder.pizzaList],
          price: state.currentOrder.price - parseFloat(action.data.amount),
        },
      };
    }
    case 'ADD_DISCOUNT_PERCENT_TO_PIZZA': {
      const { amount, discountType } = action.data;
      const { currentOrder: { pizzaSelectedInOrder, pizzaList } } = state;
      const index = pizzaList.indexOf(pizzaSelectedInOrder);
      const discount = parseFloat((pizzaSelectedInOrder.size.price * parseFloat(amount)).toFixed(2));
      const pizza = {
        ...pizzaSelectedInOrder,
        discount: {
          discountType,
          amount: discount,
        },
      };

      pizzaList.splice(index, 1, pizza);

      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          pizzaList: [...state.currentOrder.pizzaList],
          pizzaSelectedInOrder: pizza,
          price: state.currentOrder.price - discount,
        },
      };
    }
    case 'REMOVE_DISCOUNT_FROM_PIZZA': {
      const { currentOrder: { pizzaList, pizzaSelectedInOrder } } = state;

      const index = pizzaList.indexOf(pizzaSelectedInOrder);
      const price = parseFloat((state.currentOrder.price + parseFloat(pizzaSelectedInOrder.discount.amount)).toFixed(2));
      const pizza = {
        ...pizzaSelectedInOrder,
        discount: undefined,
      };

      pizzaList.splice(index, 1, pizza);

      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          pizzaList,
          pizzaSelectedInOrder: pizza,
          price,
        },
      };
    }
    case 'ADD_COMMENT_TO_ORDER': {
      const { currentOrder, currentOrder: { comments } } = state;
      const newCommentList = comments.length === 0 ? [action.data] : [...comments, action.data];
      const newOrder = { ...currentOrder, comments: newCommentList };

      return {
        ...state,
        currentOrder: newOrder,
      };
    }
    case 'REMOVE_COMMENT_FROM_ORDER': {
      const { currentOrder, currentOrder: { comments } } = state;
      const newCommentList = comments.filter((item) => item !== action.data);
      const newOrder = { ...currentOrder, comments: newCommentList };
      return {
        ...state,
        currentOrder: newOrder,
      };
    }
    case 'MAKE_PAYMENT':
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          paidAmount: parseFloat(state.currentOrder.paidAmount) + parseFloat(action.data),
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
