import {
  GET_QUESTIONS, GET_ANSWER, RESET_COLORS, RDM_INDEX,
} from '../actions';

const INITIAL_STATE = {
  gameData: [],
  correct: '',
  wrong: '',
  shuffle: 0,
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
    case RDM_INDEX:
      return {
        ...state,
        shuffle: action.shuffle,
      };
    default:
      return state;
  }
}

export default questionsReducer;
