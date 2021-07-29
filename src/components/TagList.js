import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import getTagListApi from '../api/get/getTagList'

function TagList() {
    const [tagList, setTagList] = useState([]);

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
                        <Link onClick={() => buttonClick(tag.tagName)} style={{ textDecoration: 'none' }}><TagButton>{tag.tagName}<TagCount>({tag.count})</TagCount></TagButton></Link>
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

const TagButton = styled.div`
    margin-bottom: 0.875rem;
    background: rgb(241, 243, 245);
    border: white;
    height: 2rem;
    border-radius: 1rem;
    display: inline-flex;
    -webkit-box-align: center;
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

export default TagList;
