import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import AppHeader from './components/Common/AppHeader';
import Home from './components/Views/Home';
import AppFooter from './components/Common/AppFooter';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader></AppHeader>
      </Header>
      <Content>
        <Home></Home>
      </Content>
      <Footer>
        <AppFooter></AppFooter>
      </Footer>
    </Layout>
  );
}

export default App;
