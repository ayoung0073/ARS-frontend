import React, { useEffect, useState } from 'react'
import getProblemListApi from '../api/get'
import HeaderMain from "../components/Header"
import ProblemList from "../components/ProblemList"
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

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
        <div>
            <HeaderMain />
            <ProblemList problemList={problemList} />
        </div>
    );
}

export default Main;