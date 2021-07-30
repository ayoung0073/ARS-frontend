import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import '@toast-ui/editor/dist/toastui-editor.css';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import 'antd/dist/antd.css';
import { Rate } from 'antd';

import getProblemApi from '../api/get/getProblem'
import HeaderMain from "../components/Header"
import TagButton from "../components/TagButton";
import checkMember from "../api/get/checkMember";

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
                <Step value={problem.step} /> · <Notification>알림 예정일  <b>{problem.notificationDate}</b></Notification>
                · <Link href={problem.link}>문제 링크</Link>
                <TagList tagList={tagList} />
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
                {sessionStorage.getItem("access_token") === null
                    ? null : (checkMember() === true ?
                        <Button className="btn-secondary btn">Add Review</Button>
                        : null
                    )
                }
                <ReviewBlock>
                    {reviewList.length > 0 &&
                        reviewList.map((review, index) => {
                            return (
                                <div>
                                    <a onClick={() => props.onClick(index)}>{index + 1}. {review.createdDate.substr(0, 10)}</a>
                                </div>
                            )
                        })}
                </ReviewBlock>
            </Box>
        </div>
    )

}

function TagList(props) {
    const tagList = props.tagList
    return (
        <TagContainer>
            {tagList.length != 0 &&
                tagList.map((o) => {
                    return (
                        <Link to={`/tags?name=${o.tag.tagName}`} style={{ textDecoration: 'none' }}><TagButton name={o.tag.tagName} /></Link>
                    )
                })}
        </TagContainer>
    )
}

const TagContainer = styled.div`
    margin-top: 15px;
    margin-bottom: 3px;
    padding-bottom: 0px;
`

const Container = styled.div`
    max-width: 1200px;
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
    color: rgb(12,166,120);
    margin-left: 4px;
    font-weight: bold;
    // color: #007bff;
    // text-decoration: none;
`

const Step = styled(Rate)`
    font-size: 25px;
    margin-right: 4px;
`

const Notification = styled.span`
    margin-left: 4px;
    margin-right: 6px;
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
    position: fixed;
    top: 200px;
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