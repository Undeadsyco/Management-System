const initialState = {
  employees: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EMPLOYEES':
      return {
        ...state,
        employees: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
