import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import GoogleLoginBtn from "../components/GoogleLogin"

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
            <LoginCheck />
            <Container className="container">
                <TagList name="전체" />
                <ProblemList problemList={problemList} />
            </Container>
        </div>
    );
}

function LoginCheck() {
    if (sessionStorage.getItem("access_token") === null) {
        return (
            <Welcome><GoogleLoginBtn href="/" /></Welcome>
        )
    }
    return (<></>)
}

const Container = styled.div`
    max-width: 1200px;
`

const Welcome = styled.span`
    position: absolute;
    right: 0.5%;
    padding: 0.5%;
`
export default Main;