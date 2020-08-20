export const SET_LOGIN = 'SET_LOGIN';
export const SET_HASH = 'SET_HASH';
export const SET_TOKEN = 'SET_TOKEN';

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
