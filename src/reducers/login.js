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

const sendToStorage = (state, action) => {
  localStorage.setItem('state', JSON.stringify(
    {
      ...state,
      ranking: {
        ...state.ranking,
        player: {
          ...state.ranking.player,
          score: action.score + state.ranking.player.score,
        },
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
        ranking: {
          ...state.ranking,
          player: {
            ...state.ranking.player,
            score: action.score + state.ranking.player.score,
          },
        },
      };
    default:
      return state;
  }
};

export default loginReducer;
