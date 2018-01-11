// @flow
import * as React from 'react';
import { Input, Button } from 'antd';
import './nameSearchDropdown.css';

type Props = {
  onSearch: (name: String) => void,
  inputRef: (el: ?HTMLInputElement) => void,
};

type State = {
  searchText: String,
};

class NameSearchDropdown extends React.Component<Props, State> {
  state = {
    searchText: '',
  };

  onInputChange = (e: Event) => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <div className="custom-filter-dropdown">
        <Input
          ref={this.props.inputRef}
          placeholder="Search name"
          value={this.state.searchText}
          onChange={this.onInputChange}
          onPressEnter={this.props.onSearch}
        />
        <Button
          type="primary"
          onClick={() => this.props.onSearch(this.state.searchText)}
        >
          搜索
        </Button>
      </div>
    );
  }
}

export default NameSearchDropdown;
