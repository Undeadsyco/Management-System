const initialState = {
  doughList: [],
  pizzaList: {},
  stuffedPizzasList: [],
  toppingsList: {},
  selectedSize: {},
  selectedPizza: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_INIT':
      return {
        ...state,
        ...action.data,
      };
    case 'GET_DOUGH_LIST':
      return {
        ...state,
        doughList: action.data,
      };
    case 'GET_PIZZA_LIST':
      return {
        ...state,
        pizzaList: {
          signature: action.data.filter((pizza) => pizza.section.name === 'Signature'),
          other: action.data.filter((pizza) => pizza.section.name === 'Other'),
          special: action.data.filter((pizza) => pizza.section.name === 'Special'),
          delight: action.data.filter((pizza) => pizza.section.name === 'Delight'),
          xlny: action.data.filter((pizza) => pizza.section.name === 'XLNY'),
        },
      };
    case 'GET_STUFFED_PIZZAS':
      return {
        ...state,
        stuffedPizzasList: action.data,
      };
    case 'GET_TOPPINGS_LIST':
      return {
        ...state,
        toppingsList: {
          sauce: action.data.filter((topping) => topping.type === 'sauce'),
          seasonings: action.data.filter((topping) => topping.type === 'seasoning'),
          cheese: action.data.filter((topping) => topping.type === 'cheese'),
          meat: action.data.filter((topping) => topping.type === 'meat'),
          produce: action.data.filter((topping) => topping.type === 'produce'),
        },
      };
    case 'SELECT_SIZE':
      return {
        ...state,
        selectedSize: action.data,
      };
    case 'SELECT_PIZZA':
      return ({
        ...state,
        selectedPizza: {
          id: action.data._id,
          name: action.data.name,
          toppings: action.data.toppings,
          size: action.data.sizes[0],
        },
      });
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
