import React, { useEffect, useState } from 'react'
import styled from "styled-components";

import GoogleLoginBtn from "../components/GoogleLogin"
import getProblemListApi from '../api/get/getProblemList'
import getTagListApi from '../api/get/getTagList';
import HeaderMain from "../components/Header"
import ProblemList from "../components/ProblemList"
import TagList from "../components/TagList";
import FooterMain from '../components/Footer';

const Main = () => {
    const [problemList, setProblemList] = useState([]);
    const [allCount, setAllCount] = useState(0);
    const [tagList, setTagList] = useState([]);
    const [tagName, setTagName] = useState("전체");

    const getTagList = async () => {
        const data = await getTagListApi();
        setTagList(data);
    };

    const getProblemList = async (tagName) => {
        const data = await getProblemListApi(tagName);
        if (tagName === "") {
            setAllCount(data.length);
        }
        setProblemList(data);
    };

    useEffect(() => {
        getTagList();
    }, []);

    useEffect(() => {
        getProblemList("");
    }, []);


    const onTagClick = async (tagName) => {
        if (tagName == "전체") {
            setTagName(tagName);
            getProblemList("");
        }
        else {
            setTagName(tagName);
            getProblemList(tagName);
        }
    }

    return (
        <div>
            <HeaderMain />
            <LoginCheck />
            <Container className="container">
                <TagList onClick={onTagClick} tagList={tagList} count={allCount} name={tagName} />
                <ProblemList onClick={onTagClick} problemList={problemList} />
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

export default Main;