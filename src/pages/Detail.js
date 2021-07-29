import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import '@toast-ui/editor/dist/toastui-editor.css';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';

import getProblemApi from '../api/get/getProblem'
import HeaderMain from "../components/Header"

import selectedStar from '../images/star_selected.png';
import notSelectedStar from '../images/star_not_selected.png';

const Detail = (props) => {
    const [problem, setProblem] = useState({});
    const [review, setReview] = useState({});
    const [reviewList, setReviewList] = useState([]);
    const problemId = props.match.params.problemId;

    const getProblem = async () => {
        const data = await getProblemApi(problemId);
        setProblem(data);
        setReviewList(data.reviewList)
        setReview(data.reviewList[0])
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

function Step() {
    function selectStar(step) {
        console.log(step)
        let num = 1;
        const result = [];
        for (num = 1; num <= step; num++)
            document.getElementById("star" + num).src = selectedStar;
        for (num = step + 1; num <= 5; num++)
            document.getElementById("star" + num).src = notSelectedStar;
        return result;
    };

    return (
        <span>
            <Star id="star1" src={selectedStar} onClick={() => selectStar(1)} /><Star id="star2" src={notSelectedStar} onClick={() => selectStar(2)} /><Star id="star3" src={notSelectedStar} onClick={() => selectStar(3)} /><Star id="star4" src={notSelectedStar} onClick={() => selectStar(4)} /><Star id="star5" src={notSelectedStar} onClick={() => selectStar(5)} />
        </span>
    )
}


const Container = styled.div`
    margin-top: 3%;
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

const Star = styled.img`
    padding-bottom: 3px;
    width: 30px;
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