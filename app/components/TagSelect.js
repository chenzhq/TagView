// @flow
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

type Props = {
  tags: Array<Object>,
  handleChange: () => void,
};

const convertTagsToOptions = tags => {
  tags.map(tag => <Option key={tag._id}>{tag.name}</Option>);
};

const TagSelect = (props: Props) => {
  return (
    <Select
      mode="tags"
      style={{ width: '100%' }}
      onChange={props.handleChange}
      tokenSeparators={[',']}
    >
      {convertTagsToOptions(props.tags)}
    </Select>
  );
};

export default TagSelect;
