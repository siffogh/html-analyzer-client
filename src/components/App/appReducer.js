import cookie from 'react-cookie';

const appReducer = (state = {
  loader: false,
  user: cookie.load('user'),
}, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return Object.assign({}, state, { token: action.token, user: action.user });
    case 'AUTH_ERROR':
      return Object.assign({}, state, { authError: action.authError });
    case 'SHOW_LOADER':
      return Object.assign({}, state, { loader: true });
    case 'HIDE_LOADER':
      return Object.assign({}, state, { loader: false });
    case 'LOGOUT':
      return Object.assign({}, state, { user: undefined });
    default:
      console.log('app: ', cookie.load('user'));
      return state;
  }
};
export default appReducer;
