// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import { filterByTags } from '../actions/filter';

const { Option } = Select;

type Props = {
  tags: Array<Object>,
  handleChange: () => void,
};
const convertTagsToOptions = tags => {
  return tags.map(tag => <Option key={tag._id}>{tag.name}</Option>);
};

const mapStateToProps = state => {
  const { tags } = state.data;
  Object.keys(tags).map(tagId => tags[tagId]);
  return {
    tags: Object.keys(tags).map(tagId => tags[tagId]),
  };
};

const mapDispatchToProps = dispatch => ({
  handleChange: tags => {
    dispatch(filterByTags(tags));
  },
});

const TagSelect = (props: Props) => {
  return (
    <Select
      size="large"
      allowClear
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="请选择标签"
      onChange={props.handleChange}
      onBlur={() => {
        console.log('blur');
      }}
      tokenSeparators={[',']}
    >
      {convertTagsToOptions(props.tags)}
    </Select>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TagSelect);
