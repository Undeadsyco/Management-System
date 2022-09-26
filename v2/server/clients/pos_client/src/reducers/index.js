import { combineReducers } from 'redux';

import orderReducer from './orderReducer';
import mainReducer from './mainReducer';
import menuReducer from './menuReducer';

const reducer = combineReducers({
  main: mainReducer,
  menu: menuReducer,
  order: orderReducer,
});

export default reducer;
