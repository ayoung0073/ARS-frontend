import React, { useEffect, useState } from 'react'
import getProblemListApi from '../api/get'
import styled from "styled-components";
import HeaderMain from "../components/Header"
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { Content, Footer } = Layout;


const Main = () => {
    const [problemList, setProblemList] = useState([]);

    const getProblemList = async () => {
        const data = await getProblemListApi();
        setProblemList(data);
    };

    useEffect(() => {
        getProblemList();
    }, []);

    return (
        <Layout>
            <HeaderMain />
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    {problemList.length != 0 &&  
                        problemList.map((problem) => {
                            return (
                                <div>{problem.title + ' ' + problem.step}</div>
                            )
                    })}
                </div>
            </Content>
        </Layout>
    );
}


export default Main;