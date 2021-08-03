import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import 'antd/dist/antd.css';
import { List, Input } from 'antd';

import HeaderMain from "../components/Header"
import getGuestListApi from '../api/get/getGuestList';
import registerGuestApi from '../api/post/registerGuest';
import FooterMain from '../components/Footer';

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
    let nickname = "익명"
    if (sessionStorage.getItem("nickname") !== null) {
      nickname = sessionStorage.getItem("nickname");
    }
    const data = {
      nickname: nickname,
      content: content
    }
    await registerGuestApi(data)
  }

  return (
    <>
      <HeaderMain />
      <Title>Guest Book</Title>
      <Container className="container">
        <GuestInput>
          <Button onClick={onSumbitHandler} className="btn btn-outline-secondary">등록하기</Button>
          <GuestInputTitle><Emoji>📝</Emoji>
            {sessionStorage.getItem("nickname") !== null ? <span>"{sessionStorage.getItem("nickname")}"님, </span> : <span>"익명"님, </span>}
            방명록을 입력해주세요
          </GuestInputTitle>
          <TextArea showCount maxLength={100} onChange={onChange} />
        </GuestInput>
        <GuestListTitle><Emoji>📄</Emoji> 방명록 목록</GuestListTitle>
        <GuestList data={guestList} />
      </Container>
      <FooterMain />
    </>
  )
}

function GuestList(props) {
  if (sessionStorage.getItem("access_token") !== null) {
    return (
      <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
          <List.Item
            actions={[<a key="list-loadmore-edit">delete</a>]}
          >
            <List.Item.Meta
              title={item.content}
              description={item.nickname}
            />
            <div>{item.createdDate}</div>
          </List.Item>
        )}
      />
    )
  } 
  else {
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
            <div>{item.createdDate}</div>
          </List.Item>
        )}
      />
    )
  }
}

const Container = styled.div`
  padding-left: 3%;
  padding-right: 3%;
`

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
