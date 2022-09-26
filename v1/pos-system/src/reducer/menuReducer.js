/* eslint-disable default-param-last */
const initialState = {
  sizes: [],
  currentSize: '',
  pizzas: [],
  stuffedPizzas: [],
  xlPizzas: [],
  selectedPizza: {},
  toppings: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SIZES':
      return {
        ...state,
        sizes: action.data.map((size) => (
          { id: size.dough_id, size: size.dough_size }
        )),
      };
    case 'GET_PIZZAS_BY_SIZE':
      return {
        ...state,
        currentSize: action.data.dough_size,
        pizzas: action.data.sections.map((item) => (
          { type: item.section, pizzas: item.pizzas }
        )),
      };
    case 'GET_STUFFED_COMPLETE':
      return {
        ...state,
        stuffedPizzas: action.data,
      };
    case 'GET_XL_COMPLETE':
      return {
        ...state,
        xlPizzas: action.data,
      };
    case 'GET_PIZZA_BY_ID':
      return {
        ...state,
        selectedPizza: {
          id: action.data.pizza_id,
          name: action.data.pizza_name,
          toppings: action.data.toppings,
          price: action.data.pizza_dough.pizza_price,
        },
      };
    case 'GET_TOPPINGS':
      return {
        ...state,
        toppings: [
          action.data.filter((item) => item.topping_type === 'sauce'),
          action.data.filter((item) => item.topping_type === 'cheese'),
          action.data.filter((item) => item.topping_type === 'seasoning'),
          action.data.filter((item) => item.topping_type === 'meat'),
          action.data.filter((item) => item.topping_type === 'produce'),
        ],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
