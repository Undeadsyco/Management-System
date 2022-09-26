/* eslint-disable default-param-last */
const initialState = {
  user: undefined,
  employees: [],
  timesType: '',
  times: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_EMPLOYEES':
      return {
        ...state,
        employees: action.data.employees,
      };
    case 'LOGIN_COMPLETE':
      return {
        ...state,
        user: action.data.user,
      };
    case 'CLOCK_IN':
      return {
        ...state,
        user: action.data.user,
      };
    case 'CLOCK_OUT':
      return {
        ...state,
        user: {},
      };
    case 'CLEAR_USER':
      return {
        ...state,
        user: {},
      };
    case 'GET_TIMES':
      return {
        ...state,
        times: action.data.employeesWithTimes,
        timesType: action.data.type,
      };
    case 'CLEAR_TIMES':
      return {
        ...state,
        timesType: '',
        times: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default user;
