import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout} from 'antd';
import Module from './containers/Module';
import JsonToTs from './containers/JsonToTs';
import './App.css';
import Nav from './components/Nav';
const { Content, Sider } = Layout;

class App extends Component {

  render() {
    return <Router><Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
          <Nav />
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '0px 16px 0', overflow: 'initial', minHeight: '100vh' }}>
                <Route path="/" exact component={Module} />
                <Route path="/json2ts" component={JsonToTs} />
          </Content>
        </Layout>
    </Layout></Router>;
  }
}

export default App;