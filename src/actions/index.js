export const SET_LOGIN = 'SET_LOGIN';
export const SET_HASH = 'SET_HASH';
export const SET_TOKEN = 'SET_TOKEN';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_ANSWER = 'GET_ANSWER';
export const STORE_QUESTIONS = 'STORE_QUESTIONS';
export const SET_COUNTER = 'SET_COUNTER';
export const RESET_COLORS = 'RESET_COLORS';
export const SET_SCORE = 'SET_SCORE';
export const RDM_INDEX = 'RDM_INDEX';

export const setStatus = (email, name) => ({
  type: SET_LOGIN,
  email,
  name,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const setHash = (hash) => ({
  type: SET_HASH,
  hash,
});

export const getQuestions = (gameData) => ({
  type: GET_QUESTIONS,
  gameData,
});

export const setCounter = (counter) => ({
  type: SET_COUNTER,
  counter,
});

export const getAnswer = (correct, wrong) => ({
  type: GET_ANSWER,
  correct,
  wrong,
});

export const resetColors = () => ({
  type: RESET_COLORS,
});

export const setScore = (score) => ({
  type: SET_SCORE,
  score,
});

export const randomIndex = (shuffle) => ({
  type: RDM_INDEX,
  shuffle,
});
