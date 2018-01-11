// @flow
import * as React from 'react';
import type { Children } from 'react';
import { Layout, Menu, Icon, Modal } from 'antd';
import SideMenu from '../components/SideMenu';

const { dialog } = require('electron').remote;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

type Props = {
  children: Children,
};

export default class App extends React.Component<Props> {
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">文件</Menu.Item>
            <Menu.Item key="2">标签</Menu.Item>
            <Menu.Item key="3">待开放</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <SideMenu />
          </Sider>
          <Layout style={{ padding: '16px 16px' }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                Height: '100vh',
              }}
            >
              <div>{this.props.children}</div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
