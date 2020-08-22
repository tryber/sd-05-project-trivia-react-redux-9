import {
  SET_TOKEN,
  SET_HASH,
  SET_COUNTER,
} from '../actions';

const INITIAL_STATE = {
  loading: true,
  hash: '',
  token: null,
  counter: 0,
};

function requestReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
        loading: false,
      };
    case SET_HASH:
      return {
        ...state,
        hash: action.hash,
      };
    case SET_COUNTER:
      return {
        ...state,
        counter: action.counter + 1,
      };
    default:
      return state;
  }
}

export default requestReducer;
