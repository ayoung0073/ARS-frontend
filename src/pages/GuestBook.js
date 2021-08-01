import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { List, Avatar, Input } from 'antd';


import HeaderMain from "../components/Header"

export default function GuestBook() {

    const { TextArea } = Input;
    const data = [
        {
          title: 'Ant Design Title 1',
        },
        {
          title: 'Ant Design Title 2',
        },
        {
          title: 'Ant Design Title 3',
        },
        {
          title: 'Ant Design Title 4',
        },
    ]

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
                <GuestList data={data} />
            </div>
        </>
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
`

const GuestListTitle = styled.div`
    font-weight: bold;
    margin-top: 3%;
    margin-bottom: 0.5%%;
    text-decoration: underline;
    font-size: 20px;
`

const Button = styled.span`
    float: right;
    padding: 3px 8px;
`

function GuestList(props) {
    return (
        <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    )
}
