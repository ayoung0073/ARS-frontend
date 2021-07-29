import React, { useEffect, useState } from 'react'
import getProblemListApi from '../api/get/getProblemListByTag'
import HeaderMain from "../components/Header"
import ProblemList from "../components/ProblemList"
import TagList from "../components/TagList";
import queryString from 'query-string'

const TagMain = (props) => {
    const [problemList, setProblemList] = useState([]);

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
            <TagList />
            <ProblemList problemList={problemList} />
        </div>
    );
}

export default TagMain;