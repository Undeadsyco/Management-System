import { combineReducers } from 'redux';

import userReducer from './userReducer';
import menuReducer from './menuReducer';
import orderReducer from './orderReducer';
import inventoryReducer from './inventoryReducer';
import actionsReducer from './actionReducer';

const reducer = combineReducers({
  user: userReducer,
  menu: menuReducer,
  order: orderReducer,
  inventory: inventoryReducer,
  actions: actionsReducer,
});

export default reducer;
