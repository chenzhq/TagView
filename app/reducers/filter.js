import { combineReducers } from 'redux';
import size from './size';
import name from './name';
import tags from './tags';

const filterReducer = combineReducers({
  size,
  name,
  tags,
});

export default filterReducer;
