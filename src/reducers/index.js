import { combineReducers } from 'redux';
import loginReducer from './login';
import requestReducer from './request';
import questionsReducer from './questions';

const rootReducer = combineReducers({
  loginReducer,
  requestReducer,
  questionsReducer,
});

export default rootReducer;
