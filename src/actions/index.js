import requestAPI from '../services/';

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
})

export function thunkRequest() {
  return (dispatch) => {
    dispatch(requestLoading());
      return requestAPI()
        .then(
          ()
        )
  }
}

// {"response_code":0,"response_message":"Token Generated Successfully!","token":"e40bec2c1a71e539d54f75a62581215702ff8e3579b225ef090aa57d3891ac53"}

// PRA MIM VC TÁ ON AQUI