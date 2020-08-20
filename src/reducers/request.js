import {
  SET_TOKEN,
} from '../actions';

const INITIAL_STATE = {
  loading: false,
  data: {},
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
    default:
      return state;
  }
}

export default requestReducer;
