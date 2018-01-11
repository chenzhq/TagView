/* 与筛选相关的action */
// @flow
export const FILTER_SIZE = 'FILTER_SIZE';
export const FILTER_NAME = 'FILTER_NAME';
export const FILTER_TAGS = 'FILTER_TAGS';

export const filterBySize = (min: Number, max: Number) => ({
  type: FILTER_SIZE,
  min,
  max,
});

export const filterByName = (name: String) => ({
  type: FILTER_NAME,
  name,
});

export const filterByTags = (tags: Array<String>) => ({
  type: FILTER_TAGS,
  tags,
});
