export const SET_LOGIN = 'SET_LOGIN';

export const setStatus = (email, name) => ({
  type: SET_LOGIN,
  email,
  name,
});
