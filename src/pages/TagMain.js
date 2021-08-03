import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import queryString from 'query-string'

import GoogleLoginBtn from "../components/GoogleLogin"
import getProblemListApi from '../api/get/getProblemListByTag'
import HeaderMain from "../components/Header"
import ProblemList from "../components/ProblemList"
import TagList from "../components/TagAllList";
import FooterMain from '../components/Footer';

const TagMain = (props) => {
    const [problemList, setProblemList] = useState([]);

    console.log(props.location)
    const { search } = props.location;	// 문자열 형식으로 결과값이 반환
    const queryObj = queryString.parse(search);	// 문자열의 쿼리스트링을 Object로 변환
    const tagName = queryObj.name;

    const getProblemList = async () => {
        const data = await getProblemListApi(tagName);
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
                <TagList name={tagName} />
                <ProblemList problemList={problemList} />
            </Container>
            <FooterMain />
        </div>
    );
}

function LoginCheck() {
    if (sessionStorage.getItem("nickname") === null) {
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

export default TagMain;