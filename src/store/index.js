import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';
// compose with Dev Tools reference: https://www.npmjs.com/package/redux-devtools-extension

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
