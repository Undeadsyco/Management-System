import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import employeeReducer from './employeeReducer';
import menuReducer from './pizzaReducer';
import inventoryReducer from './inventoryReducer';

export default combineReducers({
  main: mainReducer,
  employee: employeeReducer,
  menu: menuReducer,
  inventory: inventoryReducer,
});
