import React from 'react';
import { Route, IndexRoute } from 'react-router';
import cookie from 'react-cookie';

import App from './components/App/AppPage';
import HomePage from './components/Home/HomePage';
import SignupPage from './components/Signup/SignupPage';
import LoginPage from './components/Login/LoginPage';

const isLoggedIn = () => {
  const user = cookie.load('user');
  return user;
};

const requireAuth = (nextState, replace) => {
  if (!isLoggedIn()) {
    replace({
      pathname: '/login'
    })
  }
};

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} onEnter={requireAuth} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
  </Route>
);

export default routes;
