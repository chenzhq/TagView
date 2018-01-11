import { FILTER_NAME } from '../actions/filter';

export default (state = '', action) => {
  switch (action.type) {
    case FILTER_NAME:
      return action.name;
    default:
      return state;
  }
};
