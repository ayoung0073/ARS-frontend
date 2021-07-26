import React, { useState } from "react";
import styled from "styled-components";
import HeaderMain from "../components/Header"
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { Content, Footer } = Layout;


const Main = () => {
    return (
        <Layout>
            <HeaderMain />
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    Content
                </div>
            </Content>
        </Layout>
    );
}


export default Main;