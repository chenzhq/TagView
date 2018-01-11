import { FILTER_TAGS } from '../actions/filter';

/* 根据标签筛选文件 */

export default (state = [], action) => {
  switch (action.type) {
    case FILTER_TAGS:
      return action.tags;
    default:
      return state;
  }
};
