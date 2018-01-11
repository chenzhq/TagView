// @flow
import * as React from 'react';
import { Modal } from 'antd';

type Props = {
  visible: boolean,
  handleOk: (e: Event) => void,
  handleCancel: (e: Event) => void,
};

class ChooseFileTypeModal extends React.Component<Props> {
  state = {
    fileTypeModalVisible: true,
  };
  handleOk = (e: Event) => {
    console.log(e);
    this.setState({
      fileTypeModalVisible: false,
    });
  };
  handleCancel = (e: Event) => {
    console.log(e);
    this.setState({
      fileTypeModalVisible: false,
    });
  };
  render() {
    return (
      <div>
        <Modal
          title="搜索文件类型"
          destroyOnClose
          visible={this.fileTypeModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default ChooseFileTypeModal;
