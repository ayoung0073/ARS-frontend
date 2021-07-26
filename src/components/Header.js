import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

function HeaderMain() {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu theme="light" mode="horizontal">
                <Menu.Item><Link to="/"><Title>ARS</Title></Link></Menu.Item>
                <Menu.Item><Link to="/"><Sub>문제 등록</Sub></Link></Menu.Item>
                <Menu.Item><Link to="/"><Sub>태그</Sub></Link></Menu.Item>
                <Menu.Item><Link to="/"><Sub>난이도</Sub></Link></Menu.Item>
            </Menu>
        </Header>
    );
}

const Header = Layout;

const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: black;
    padding-left: 5px;
`

const Sub = styled.div`
    font-size: 12px;
`

export default HeaderMain;
