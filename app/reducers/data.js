import { combineReducers } from 'redux';
import files from './files';

const dataReducer = combineReducers({
  files,
});

export default dataReducer;
