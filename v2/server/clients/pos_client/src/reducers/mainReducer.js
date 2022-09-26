const initialState = {
  currentUser: {},
  employeeTimes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MAIN_INIT':
      return {
        ...state,
        ...action.data,
      };
    case 'CLOCK_IN':
      return {
        ...state,
        currentUser: action.data,
      };
    case 'CLOCK_OUT':
      return {
        ...state,
        currentUser: {},
      };
    case 'GET_USER':
      return {
        ...state,
        currentUser: action.data,
      };
    case 'GET_EMPLOYEE_TIMES':
      return {
        ...state,
        employeeTimes: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
