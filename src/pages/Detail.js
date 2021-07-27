import React, { useEffect, useState } from 'react'
import getProblemApi from '../api/get/getProblem'
import HeaderMain from "../components/Header"

const Detail = (props) => {
    const [problem, setProblem] = useState({});
    console.log(props)
    const problemId = props.match.params.problemId
    console.log(problemId)

    const getProblem = async () => {
        const data = await getProblemApi(problemId);
        console.log(data)
        setProblem(data);
    };

    useEffect(() => {
        getProblem();
    }, []);

    return (
        <div>
            <HeaderMain />
            {problem.title}
        </div>
    );
}

export default Detail;