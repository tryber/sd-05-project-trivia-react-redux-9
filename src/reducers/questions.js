import { GET_QUESTIONS, GET_ANSWER, RESET_COLORS } from '../actions';

const INITIAL_STATE = {
  gameData: [],
  correct: '',
  wrong: '',
};

function questionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        gameData: action.gameData,
      };
    case GET_ANSWER:
      return {
        ...state,
        correct: action.correct,
        wrong: action.wrong,
      };
    case RESET_COLORS:
      return {
        ...state,
        correct: '',
        wrong: '',
      };
    default:
      return state;
  }
}

export default questionsReducer;
