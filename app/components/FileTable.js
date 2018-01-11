// @flow
import * as React from 'react';
import { Table } from 'antd';
import NameSearchDropdown from './NameSearchDropdown';

type Props = {
  dataSource: Array<Object>,
  onSearch: (name: String) => void,
};

type State = {
  filterDropdownVisible: Boolean,
  filtered: Boolean,
};

class FileTable extends React.Component<Props, State> {
  searchInput: ?HTMLInputElement;
  state = {
    filterDropdownVisible: false,
    filtered: false,
  };

  onSearch = () => {};

  render() {
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        width: 150,
        filterDropdown: (
          <NameSearchDropdown
            onSearch={this.props.onSearch}
            inputRef={el => {
              this.searchInput = el;
            }}
          />
        ),
        filterDropdownVisible: this.state.filterDropdownVisible,
        onFilterDropdownVisibleChange: visible => {
          this.setState(
            {
              filterDropdownVisible: visible,
            },
            () => this.searchInput && this.searchInput.focus()
          );
        },
      },
      {
        title: '类别',
        dataIndex: 'type',
        width: 150,
      },
      {
        title: '标签',
        dataIndex: 'tags',
      },
    ];
    return (
      <Table
        rowKey={record => record._id}
        columns={columns}
        dataSource={this.props.dataSource}
        pagination={{
          pageSize: 50,
        }}
        scroll={{
          y: 400,
        }}
      />
    );
  }
}

export default FileTable;
