import { SET_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
  ranking: {
    player: {
      score: 0,
    },
  },
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        email: action.email,
        name: action.name,
      };
    default:
      return state;
  }
};

export default loginReducer;
