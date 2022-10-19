import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import AppHeader from './components/Common/AppHeader';
import Home from './components/Views/Home';
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
    </Layout>
  );
}

export default App;
