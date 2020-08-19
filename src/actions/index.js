import requestAPI from '../services';

export const SET_LOGIN = 'SET_LOGIN';
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_OK = 'REQUEST_OK';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const setStatus = (email, name) => ({
  type: SET_LOGIN,
  email,
  name,
});

export const requestLoading = () => ({
  type: REQUEST_LOADING,
  loading: true,
});

export const requestSucess = (data) => ({
  type: REQUEST_OK,
  loading: false,
  data: data.token,
});

export const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  loading: false,
  error: error.message,
});

export function thunkRequest() {
  return (dispatch) => {
    dispatch(requestLoading());
    return requestAPI()
      .then(
        (resposta) => dispatch(requestSucess(resposta)),
        (error) => dispatch(requestFailed(error)),
      );
  };
}
