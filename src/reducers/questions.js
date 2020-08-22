import { GET_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  gameData: [],
};

function questionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        gameData: action.gameData,
      };
    default:
      return state;
  }
}

export default questionsReducer;
