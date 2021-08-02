import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { List, Avatar, Input } from 'antd';

import HeaderMain from "../components/Header"
import getGuestListApi from '../api/get/getGuestList';

export default function GuestBook() {

  const [guestList, setGuestList] = useState([]);

  const getGuestList = async () => {
      const data = await getGuestListApi();
      setGuestList(data);
  };

  useEffect(() => {
    getGuestList();
  }, []);

    const { TextArea } = Input;
        
    const onChange = e => {
        console.log('Change:', e.target.value);
    };

    const onSumbitHandler = () => {
        console.log("클릭")
    }

    return (
        <>
            <HeaderMain />
            <Title>Guest Book</Title>
            <div className="container">
                {sessionStorage.getItem("nickname") !== null ?
                    <GuestInput>
                        <Button onClick={onSumbitHandler} className="btn btn-outline-secondary">등록하기</Button>
                        <GuestInputTitle>방명록을 입력해주세요</GuestInputTitle>
                        <TextArea showCount maxLength={100} onChange={onChange} />
                    </GuestInput>
                    : null}
                <GuestListTitle>방명록 목록</GuestListTitle>
                <GuestList data={guestList} />
            </div>
        </>
    )
}

function GuestList(props) {
  return (
      <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={item.nickname}
            description={item.content}
          />
        </List.Item>
      )}
    />
  )
}

const Title = styled.div`
    margin-top: 1%;
    margin-bottom: 2%;
    text-align: center;
    font-size: 35px;
    font-weight: bold;
`

const GuestInput = styled.div`
    margin-top: 2%;
`

const GuestInputTitle = styled.div`
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 1%;
    font-size: 20px;
    color: dark-grey;
`

const GuestListTitle = styled.div`
    font-weight: bold;
    margin-top: 3%;
    margin-bottom: 0.5%%;
    text-decoration: underline;
    font-size: 20px;
    color: dark-grey;
`

const Button = styled.span`
    float: right;
    padding: 3px 8px;
`
