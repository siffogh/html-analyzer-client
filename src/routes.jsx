import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/AppPage';
import HomePage from './components/Home/HomePage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);

export default routes;