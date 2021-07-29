import React, { useEffect, useState } from 'react'
import styled from "styled-components";

import getProblemListApi from '../api/get/getProblemList'
import HeaderMain from "../components/Header"
import ProblemList from "../components/ProblemList"
import TagList from "../components/TagAllList";

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
            <Container className="container">
                <TagList />
                <ProblemList problemList={problemList} />
            </Container>
        </div>
    );
}

const Container = styled.div`
    max-width: 1200px;
`

export default Main;