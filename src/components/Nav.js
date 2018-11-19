import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/" className="nav-text">
            <Icon type="project" />
            Generate Module
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/json2ts" className="nav-text">
            <Icon type="code" />
            Json to TS
          </Link>
        </Menu.Item>
      </Menu>;
  }
}

export default Nav;
