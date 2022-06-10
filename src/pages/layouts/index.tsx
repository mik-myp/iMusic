import React from 'react';
import './index.less';
import { Layout } from 'antd';
import MusicHeader from '../../component/MusicHeader';
import MusicSider from '../../component/MusicSider';
import { useRoutes } from 'react-router-dom';
// import routes from '../../route';
import MusicFooter from '../../component/MusicFooter';
import { Link } from 'umi';
const { Footer, Sider, Content, Header } = Layout;

function Index(props) {
  return (
    <>
      <Layout style={{ height: '100%' }}>
        <MusicHeader />
        <Layout style={{ height: '500px' }}>
          <Sider style={{ borderRight: '1px soild #e1e1e1' }}>
            <MusicSider />
          </Sider>
          <Content>{props.children}</Content>
        </Layout>
        <Footer>
          <MusicFooter />
        </Footer>
      </Layout>
    </>
  );
}

export default Index;
