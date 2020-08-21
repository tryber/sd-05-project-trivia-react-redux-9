import {
  SET_TOKEN,
  SET_HASH,
} from '../actions';

const INITIAL_STATE = {
  loading: true,
  hash: '',
  token: null,
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
    default:
      return state;
  }
}

export default requestReducer;
