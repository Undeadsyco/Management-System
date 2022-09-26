/* eslint-disable default-param-last */
const initialState = {
  numberPadType: '',
  keyboardType: '',
  discountType: '',
  listAction: '',
};

const actions = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NUMBER_PAD_TYPE':
      return {
        ...state,
        numberPadType: action.data.type,
        discountType: action.data.discountType,
      };
    case 'SET_DISCOUNT_TYPE':
      return {
        ...state,
        discountType: action.discountType,
      };
    case 'SET_KEYBOARD_TYPE':
      return {
        ...state,
        keyboardType: action.data.type,
      };
    case 'SET_LIST_ACTION':
      return {
        ...state,
        listAction: action.data.type,
      };
    default:
      return {
        ...state,
      };
  }
};

export default actions;
