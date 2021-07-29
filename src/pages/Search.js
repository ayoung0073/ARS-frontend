import { useEffect, useState } from "react";
import queryString from 'query-string'
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import { Viewer } from '@toast-ui/react-editor';

import HeaderMain from "../components/Header"
import searchApi from '../api/get/getSearch'

const Search = (props) => {
    const [searchList, setSearchList] = useState([])

    const { search } = props.location;
    const queryObj = queryString.parse(search);
    const keyword = queryObj.q;

    const getSearchList = async () => {
        const data = await searchApi(keyword);
        setSearchList(data)
    };

    useEffect(() => {
        getSearchList();
    }, []);

    return (
        <div>
            <HeaderMain />
            <SearchList className="container">
                {searchList.length > 0 &&
                    searchList.map((search) => {
                        return (
                            <CardComponent>
                                <Title>{search.title}</Title>
                                <Step value={search.step} />
                                · <Link href={search.link}>문제 링크</Link>
                                <hr />
                                <Viewer initialValue={search.content} />
                            </CardComponent>
                        )
                    })}
            </SearchList>
        </div>
    )
}

const SearchList = styled.div`
    max-width: 1200px;
    margin-left: 130px;
    margin-right: 130px;
`

const CardComponent = styled.div`
    border: solid 1px lightgrey;
    border-radius: 10px;
    margin-top: 20px;
    padding: 3% 6%;
`

const Title = styled.div`
    display: block;
    margin-top: 1.5%;
    margin-bottom: 0.5%;
    padding: 0px;
    font-size: 2.15rem;
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
`

const Step = styled(Rate)`
    font-size: 25px;
    margin-right: 4px;
`

export default Search
