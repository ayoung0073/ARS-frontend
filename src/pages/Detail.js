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
        setReview(data.reviewList)
        setReview(data.reviewList[0])
    };

    useEffect(() => {
        getProblem();
    }, []);

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
            <div className="container">
                <Title>{problem.title}</Title>
                <Step /> ·  알림 예정일  <b>{problem.notificationDate}</b>
                <div id="viewer"></div>
            </div>
        </div>
    );
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

const Title = styled.div`
    display: block;
    margin-top: 1.5%;
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

export default Detail;