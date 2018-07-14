import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Routers from './router'

import Banners from './view/banner'
import './app.css'

const { Header, Content, Footer } = Layout;


class App extends Component {

  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="container-1170 ">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">
                  <Link to="/">nav 1</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/id/571338279">根据ID查询</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/three">nav 3</Link>
                </Menu.Item>
              </Menu>
            </div>
          </Header>
          <Content>
            <div className="container-1170 ">
              <Banners />
              <Routers />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            uyoung ©2018 Created by uyoung
          </Footer>
        </Layout>

        
      </div>
    );
  }
}

export default App;


