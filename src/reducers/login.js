import { SET_LOGIN, SET_SCORE } from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
  score: 0,
  assertions: 0,
};

const sendToStorage = (state, action) => {
  localStorage.setItem('state', JSON.stringify(
    {
      player: {
        name: state.name,
        assertions: state.assertions + 1,
        score: action.score + state.score,
        gravatarEmail: state.email,
      },
    },
  ));
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        email: action.email,
        name: action.name,
      };
    case SET_SCORE: // https://bit.ly/34sZRhl
      sendToStorage(state, action);
      return {
        ...state,
        score: action.score + state.score,
        assertions: state.assertions + 1,
      };
    default:
      return state;
  }
};

export default loginReducer;
