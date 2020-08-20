import { combineReducers } from 'redux';
import loginReducer from './login';
import requestReducer from './request';

const rootReducer = combineReducers({
  loginReducer,
  requestReducer,
});

export default rootReducer;
