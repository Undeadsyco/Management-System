const initialState = {
  doughList: [],
  sectionList: [],
  toppings: {},
  pizzaList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_DOUGH':
      return {
        ...state,
        doughList: [...state.doughList, action.data],
      };
    case 'GET_DOUGH_LIST':
      return {
        ...state,
        doughList: action.data,
      };
    case 'ADD_NEW_SECTION':
      return {
        ...state,
        sectionList: [...state.sectionList, action.data],
      };
    case 'GET_SECTION_LIST':
      return {
        ...state,
        sectionList: action.data,
      };
    case 'GET_TOPPING_LIST':
      return {
        ...state,
        toppings: {
          sauce: action.data.filter((item) => item.type === 'sauce'),
          cheese: action.data.filter((item) => item.type === 'cheese'),
          seasoning: action.data.filter((item) => item.type === 'seasoning'),
          meat: action.data.filter((item) => item.type === 'meat'),
          produce: action.data.filter((item) => item.type === 'produce'),
        },
      };
    case 'ADD_NEW_PIZZA':
      return {
        ...state,
        pizzaList: [...state.pizzaList, action.data],
      };
    case 'GET_PIZZA_LIST':
      return {
        ...state,
        pizzaList: action.data,
      };
    case 'CLEAR_PIZZA_LIST':
      return {
        ...state,
        pizzaList: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
