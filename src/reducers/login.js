import { SET_LOGIN, SET_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  score: 0,
  assertions: 0,
  gravatarEmail: '',
};

const storageUser = (state, action) => {
  localStorage.setItem('state', JSON.stringify(
    {
      player: {
        ...state,
        name: action.name,
        gravatarEmail: action.email,
        assertions: 0,
        score: 0,
      },
    },
  ));
};

const storageScore = (state, action) => {
  localStorage.setItem('state', JSON.stringify(
    {
      player: {
        ...state,
        assertions: state.assertions + 1,
        score: action.score + state.score,
      },
    },
  ));
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN:
      storageUser(state, action);
      return {
        ...state,
        name: action.name,
        gravatarEmail: action.email,
        assertions: 0,
        score: 0,
      };
    case SET_SCORE: // https://bit.ly/34sZRhl
      storageScore(state, action);
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
