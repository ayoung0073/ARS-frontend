import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import getTagListApi from '../api/get/getTagList'

function TagList(props) { // 전체 리스트 
    const [tagList, setTagList] = useState([]);
    let tagName = "전체"
    if (props.name !== null) {
        tagName = props.name;
    }
    const getTagList = async () => {
        const data = await getTagListApi();
        setTagList(data);
    };

    useEffect(() => {
        getTagList();
    }, []);

    const buttonClick = async (tagName) => {
        window.location.href = "/tags?name=" + tagName
    }

    return (
        <Container className="container">
            <TagTitle>태그 목록</TagTitle>
            {tagList.length != 0 &&
                tagList.map((tag) => {
                    return (
                        <Link onClick={() => buttonClick(tag.tagName)} style={{ textDecoration: 'none' }}>
                            {tagName === tag.tagName ?
                                <TagClickButton><b>{tag.tagName}</b><TagClickCount><b>({tag.count})</b></TagClickCount></TagClickButton>
                                : <TagButton>{tag.tagName}<TagCount>({tag.count})</TagCount></TagButton>}
                        </Link>
                    )
                })}
        </Container>
    )
}

const Container = styled.div`
    margin-top: 2%;
    margin-bottom: 0.5%;
`

const TagTitle = styled.div`
    text-decoration: underline;
    color: grey;
    margin-left: 1%;
    margin-bottom: 1%;
`

const TagCount = styled.span`
    margin-left: 2px;
    color: #b1b1b1;
`

const TagClickCount = styled.span`
    margin-left: 2px;
    color: rgb(241, 243, 245);
`
const TagButton = styled.div`
    margin-bottom: 0.875rem;
    background: rgb(241, 243, 245);
    border: white;
    height: 2rem;
    border-radius: 1rem;
    display: inline-flex;
    align-items: center;
    color: grey;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    padding-right: 10px;
    padding-left: 10px;
    margin-left: 5px;
    margin-right: 5px;
`

const TagClickButton = styled.div`
    margin-bottom: 0.875rem;
    background: grey;
    border: white;
    height: 2rem;
    border-radius: 1rem;
    display: inline-flex;
    align-items: center;
    color: rgb(241, 243, 245);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    padding-right: 10px;
    padding-left: 10px;
    margin-left: 5px;
    margin-right: 5px;
`

export default TagList;
