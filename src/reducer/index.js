

import { combineReducers } from 'redux';

import auth from './auth';
import orders from './order';
// import product from './product';

export default combineReducers({
  orders,
  auth
});
