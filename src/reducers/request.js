import { REQUEST_LOADING, REQUEST_OK, REQUEST_FAILED } from '../actions';

const INITIAL_STATE = {
  loading: false,
  data: {},
};

function requestReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_OK:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default requestReducer;
