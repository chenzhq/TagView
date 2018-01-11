// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import filter from './filter';
import data from './data';

const rootReducer = combineReducers({
  data,
  filter,
  router,
});

export default rootReducer;
