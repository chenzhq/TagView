// @flow
import * as React from 'react';
import type { Children } from 'react';
import { Layout, Menu, Icon, Modal } from 'antd';
import SideMenu from '../components/SideMenu';
import DialogDemo from '../components/DialogDemo';

const { dialog } = require('electron').remote;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

type Props = {
  children: Children,
};

export default class App extends React.Component<Props> {
  render() {
    return (
      <div>
        <DialogDemo />
      </div>
    );
  }
}
