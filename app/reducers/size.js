import { FILTER_SIZE } from '../actions/filter';

/* 根据大小筛选文件 */

export default (state = { min: 0, max: 0 }, action) => {
  switch (action.type) {
    case FILTER_SIZE:
      return { min: action.min, max: action.max };
    default:
      return state;
  }
};
