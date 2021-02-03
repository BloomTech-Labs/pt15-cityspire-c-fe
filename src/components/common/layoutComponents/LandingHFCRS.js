import React from 'react';
import { Layout } from 'antd';
import HeaderContents from './HeaderContents';
import FooterContents from './FooterContents';
import ContentContents from './ContentContents';
import '../../../antD/styles/antDLayoutHFCRS.css';

const LandingHFCRS = props => {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout className="page">
      <Header className="header-footer">
        <HeaderContents>{props.HeaderComponents}</HeaderContents>
      </Header>
      <Layout>
        <Content className="content">
          <ContentContents>{props.ContentComponents}</ContentContents>
        </Content>
      </Layout>
      <Footer className="header-footer">
        <FooterContents>{props.FooterComponents}</FooterContents>
      </Footer>
    </Layout>
  );
};

export default LandingHFCRS;
