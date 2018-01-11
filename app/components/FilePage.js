// @flow
import React from 'react';
import { Row, Col, Mention } from 'antd';
import TagSelect from '../containers/TagSelect';
import FilterTabel from '../containers/FilterTable';
import ChooseFileTypeModal from './ChooseFileTypeModal';

const { toString, toContentState } = Mention;
const onChange = contentState => {
  console.log(toString(contentState));
};

const HeaderSearchBar = () => (
  <div>
    <Row type="flex" justify="start">
      <Col span={18}>
        <TagSelect />
      </Col>
      <Col span={6} />
    </Row>
    <Row>
      <FilterTabel />
    </Row>
  </div>
);

export default HeaderSearchBar;
