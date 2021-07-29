import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import '@toast-ui/editor/dist/toastui-editor.css';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';

import getProblemApi from '../api/get/getProblem'
import HeaderMain from "../components/Header"
import Step from "../components/Step"

const Detail = (props) => {
    const [problem, setProblem] = useState({});
    const [review, setReview] = useState({});
    const [reviewList, setReviewList] = useState([]);
    const [tagList, setTagList] = useState([]);
    const problemId = props.match.params.problemId;

    const getProblem = async () => {
        const data = await getProblemApi(problemId);
        setProblem(data);
        setReviewList(data.reviewList)
        setReview(data.reviewList[0])
        setTagList(data.tagList)
    };

    useEffect(() => {
        getProblem();
    }, []);

    const onClick = (reviewId) => {
        console.log(reviewId)
        setReview(reviewList[reviewId])
    }

    let el = document.querySelector('#viewer')
    if (el !== null) {
        const viewer = new Viewer({
            el: el,
            height: '600px',
            initialValue: review.content
        });
    }

    return (
        <div>
            <HeaderMain />
            <Container>
                <Title>{problem.title}</Title>
                <Step /> ·  알림 예정일  <b>{problem.notificationDate}</b>
                <TagList tagList={tagList} />
                <hr />
                <Link href={problem.link}>문제 링크</Link>
                <hr />
                <div id="viewer"></div>
            </Container>
            <ReviewList onClick={onClick} reviewList={reviewList} />
        </div>
    );
}

function ReviewList(props) {
    const reviewList = props.reviewList;
    return (
        <div>
            <Box className="card m-2">
                <Button className="btn-secondary btn">Add Review</Button>
                {reviewList.length > 0 &&
                    reviewList.map((review, index) => {
                        return (
                            <div>
                                <ReviewBlock>
                                    <a onClick={() => props.onClick(index)}>{index + 1}. {review.createdDate.substr(0, 10)}</a>
                                </ReviewBlock>
                            </div>
                        )
                    })}
            </Box>
        </div>
    )

}

function TagList(props) {
    const tagList = props.tagList
    console.log(tagList)
    return (
        <TagContainer>
            {tagList.length != 0 &&
                tagList.map((o) => {
                    return (
                        <Link to={`/tags?name=${o.tag.tagName}`} style={{ textDecoration: 'none' }}><TagButton>{o.tag.tagName}</TagButton></Link>
                    )
                })}
        </TagContainer>
    )
}

const TagContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 0px;
    padding-bottom: 0px;
`

const TagButton = styled.div`
    background: rgb(241, 243, 245);
    border: white;
    height: 2rem;
    border-radius: 1rem;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(12, 166, 120);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    padding-right: 10px;
    padding-left: 10px;
    margin-left: 3px;
    margin-right: 3px;
`

const Container = styled.div`
    margin-top: 2%;
    margin-left: 20%;
    margin-right: 20%;
`

const Title = styled.div`
    display: block;
    margin-top: 1.5%;
    margin-bottom: 0.5%;
    padding: 0px;
    font-size: 2.75rem;
    width: 100%;
    resize: none;
    line-height: 1.5;
    outline: none;
    border: none;
    font-weight: bold;
    color: rgb(33, 37, 41);
`

const Link = styled.a`
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
`

const Box = styled.div`
    width: 240px;
    margin-left: 1%;
    border: none;
    border-left: 2px solid rgb(233, 236, 239);
    padding: 0.25rem 0.75rem;
    color: rgb(134, 142, 150);
    line-height: 1.5;
    font-size: 0.875rem;
    max-height: calc(100vh - 128px);
    overflow: hidden auto;
    position: fixed;
    top: 30%;
    right: 0px;
`

const Button = styled.button`
    width: 85%;
    margin-bottom: 8%;
`

const ReviewBlock = styled.div`
    padding-left: 5%;    
`

export default Detail;