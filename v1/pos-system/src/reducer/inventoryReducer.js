/* eslint-disable default-param-last */
const initialState = {
  closedWalkins: [],
  queriedOrder: {},
  closedCallins: [],
  openCallins: [],
  openOnline: [],
  reports: [],
  totalReport: {},
  registers: [],
  selectedRegister: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLOSED_WALK_IN':
      return {
        ...state,
        closedWalkins: action.data,
      };
    case 'GET_ORDER_BY_ID':
      return {
        ...state,
        queriedOrder: action.data,
      };
    case 'GET_REPORT':
      return {
        ...state,
        reports: action.data.reports,
        totalReport: action.data.totalReport[0],
      };
    case 'GET_REGISTERS':
      return {
        ...state,
        registers: action.data.registers,
      };
    case 'SELECT_REGISTER':
      return {
        ...state,
        selectedRegister: action.data.register,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
