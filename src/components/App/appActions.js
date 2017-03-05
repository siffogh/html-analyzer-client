import cookie from 'react-cookie';

import { signup, login } from '../../api';

export const showLoader = () => ({
  type: 'SHOW_LOADER',
});

export const hideLoader = () => ({
  type: 'HIDE_LOADER',
});

export const logoutUser = () => {
  cookie.remove('user');
  window.location.href = '/login';
  return ({
    type: 'LOGOUT',
  })
};

export const authSuccess = ({ token, user }) => {
  cookie.save(
    'user',
    user,
    { path: '/', maxAge: 1000 * 60 * 60 * 24 },
  );
  cookie.save(
    'token',
    token,
    { path: '/', maxAge: 1000 * 60 * 60 * 24 },
  );
  window.location.href = '/';
  return ({
    type: 'AUTH_SUCCESS',
    token,
    user,
  })
};

export const authFail = authError => ({
  type: 'AUTH_ERROR',
  authError,
});

export const signupUser = user => (dispatch) => {
  dispatch(showLoader());
  return signup(user)
  .then(({ data }) => {
    dispatch(authSuccess(data));
  })
  .catch((err) => {
    dispatch(hideLoader());
    if(!err.response){
      return err.message;
    }
    return dispatch(authFail(err.response.data.message));
  });
};

export const loginUser = user => (dispatch) => {
  dispatch(showLoader());
  return login(user)
  .then(({ data} ) => {
    dispatch(authSuccess(data));
  })
  .catch((err) => {
    dispatch(hideLoader());
    if(!err.response){
      return err.message;
    }
    return dispatch(authFail(err.response.data.message));
  });
};

