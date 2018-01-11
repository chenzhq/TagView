// @flow
import * as React from 'react';
import { Menu, Icon, Modal } from 'antd';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
// import ChooseFileTypeModal from './ChooseFileTypeModal';

const { dialog } = require('electron').remote;

const { SubMenu } = Menu;
type Props = {};
type State = {
  fileTypeModalVisible: boolean,
  open: boolean,
};

const openFileDialog = () => {
  dialog.showOpenDialog(
    {
      title: '选择文件',
      properties: ['openFile'],
      message: '选择文件',
    },
    filePaths => {
      console.log(filePaths);
    }
  );
};

/* const openDirDialog = () => {
  dialog.showOpenDialog(
    {
      title: '选择文件夹',
      properties: ['openDirectory'],
      message: '选择文件夹',
    },
    filePaths => {
      console.log(filePaths);
    }
  );
}; */
const emails = ['username@gmail.com', 'user02@gmail.com'];

class SideMenu extends React.Component<Props, State> {
  // modal;
  state = {
    fileTypeModalVisible: false,
    open: false,
  };

  openDirDialog = () => {
    this.setState({
      fileTypeModalVisible: true,
      // open: true,
    });

    // dialog.showOpenDialog(
    //   {
    //     title: '选择文件夹',
    //     properties: ['openDirectory'],
    //     message: '选择文件夹',
    //   },
    //   filePaths => {
    //     console.log(filePaths);
    //   }
    // );
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
  handleClose = () => {
    this.setState({ open: false });
  };
  handleListItemClick = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          onClick={({ key }) => {
            if (key === '1') {
              openFileDialog();
            } else if (key === '2') {
              this.openDirDialog();
            }
          }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="plus" />新增
              </span>
            }
            onTitleClick={({ key }) => {
              console.log(key);
            }}
          >
            <Menu.Item key="1">
              <Icon type="file-add" />添加单文件
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="folder-add" />添加文件夹
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore-o" />类型
              </span>
            }
          >
            <Menu.Item key="video">视频</Menu.Item>
            <Menu.Item key="voice">音频</Menu.Item>
            <Menu.Item key="pic">图片</Menu.Item>
            <Menu.Item key="text">文本</Menu.Item>
            <Menu.Item key="zip">压缩包</Menu.Item>
          </SubMenu>
          <SubMenu key="catogroy" title={<span>类别</span>}>
            <Menu.Item key="all">所有文件</Menu.Item>
            <Menu.Item key="notag">无标签文件</Menu.Item>
            <Menu.Item key="last">最近添加</Menu.Item>
            <Menu.Item key="favorite">收藏</Menu.Item>
          </SubMenu>
        </Menu>
        <Modal
          // ref={modal => (this.modal = modal)}
          title="搜索文件类型"
          visible={this.state.fileTypeModalVisible}
          mask={false}
          // onOk={this.handleOk}
          // onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        </Dialog>
      </div>
    );
  }
}

export default SideMenu;
