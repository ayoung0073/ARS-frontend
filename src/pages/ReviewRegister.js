import React, { useState } from "react";
import HeaderMain from "../components/Header"
import ReviewForm from "../components/ReviewForm"

const ReviewRegister = (props) => {
    console.log(props)

    return (
        <div>
            <HeaderMain />
            <ReviewForm problemId={props.match.params.problemId} title={props.location.state.title} />
        </div>
    );
}

export default ReviewRegister;
