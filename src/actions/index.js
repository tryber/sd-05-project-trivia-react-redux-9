export const SET_LOGIN = 'SET_LOGIN';
export const SET_HASH = 'SET_HASH';
export const SET_TOKEN = 'SET_TOKEN';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const STORE_QUESTIONS = 'STORE_QUESTIONS';

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
