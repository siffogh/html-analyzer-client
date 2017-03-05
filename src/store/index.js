import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import home from '../components/Home/homeReducer';
import app from '../components/App/appReducer';

const rootReducer = combineReducers({
  home,
  app,
});

export default () => createStore(rootReducer, applyMiddleware(thunk));
