import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { List, Avatar, Input } from 'antd';

import HeaderMain from "../components/Header"
import getGuestListApi from '../api/get/getGuestList';
import registerGuestApi from '../api/post/registerGuest';

export default function GuestBook() {

  const [guestList, setGuestList] = useState([]);
  const [content, setContent] = useState("");

  const getGuestList = async () => {
      const data = await getGuestListApi();
      setGuestList(data);
  };

  useEffect(() => {
    getGuestList();
  }, []);

    const { TextArea } = Input;
        
    const onChange = (e) => {
      setContent(e.target.value);
    };

    const onSumbitHandler = async () => {
        console.log(TextArea)
        const data = {
          nickname: sessionStorage.getItem("nickname"),
          content: content
      }
      await registerGuestApi(data)
    }

    return (
        <>
            <HeaderMain />
            <Title>Guest Book</Title>
            <div className="container">
                {sessionStorage.getItem("nickname") !== null ?
                    <GuestInput>
                        <Button onClick={onSumbitHandler} className="btn btn-outline-secondary">등록하기</Button>
                        <GuestInputTitle><Emoji>📝</Emoji> 방명록을 입력해주세요</GuestInputTitle>
                        <TextArea showCount maxLength={100} onChange={onChange} />
                    </GuestInput>
                    : null}
                <GuestListTitle><Emoji>📄</Emoji> 방명록 목록</GuestListTitle>
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
    margin-bottom: 1%;
    font-size: 19.5px;
    color: dark-grey;
`

const GuestListTitle = styled.div`
    font-weight: bold;
    margin-top: 3%;
    margin-bottom: 0.5%;
    border-bottom: solid 1px lightgrey;
    padding-bottom: 0.5%;
    font-size: 19.5px;
    color: dark-grey;
`

const Emoji = styled.span`
  margin-right: 6px;
`

const Button = styled.span`
    float: right;
    padding: 3px 8px;
`
