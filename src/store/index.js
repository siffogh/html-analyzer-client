import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import home from '../components/Home/homeReducer';


const rootReducer = combineReducers({
  home,
});

export default () => createStore(rootReducer, applyMiddleware(thunk));
