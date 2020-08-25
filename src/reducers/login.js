import { SET_LOGIN, SET_SCORE } from '../actions';

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
    case SET_SCORE: // https://bit.ly/34sZRhl
      return {
        ...state,
        ranking: {
          ...state.ranking,
          player: {
            ...state.ranking.player,
            score: action.score,
          },
        },
      };
    default:
      return state;
  }
};

export default loginReducer;
