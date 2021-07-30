import React, { useState } from "react";
import styled from "styled-components";
import 'antd/dist/antd.css';

import checkMember from "../api/get/checkMember";

function HeaderMain() {

    const [search, setSearch] = useState("")

    const onChange = (e) => {
        setSearch(e.currentTarget.value)
    }

    const onClick = () => {
        console.log(search)
        window.location.href = "/search?q=" + search;
    }

    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            e.preventDefault()
            window.location.href = "/search?q=" + search;
        }
    }

    const check = () => {
        var name = "Login";
        var option = "width = 550, height = 550, top = 100, left = 400, location = no"
        if (sessionStorage.getItem("access_token") === null) {
            window.open("/login", name, option)
        }
        else {
            window.location.href = "/write";
        }
    }

    return (
        <>
            <Container>
                <nav className="navbar justify-content-center navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><b>ARS</b></a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {sessionStorage.getItem("access_token") === null
                                    ? null : (checkMember() === true ?
                                        <li className="nav-item">
                                            <a className="nav-link active" onClick={check}>문제 등록</a>
                                        </li>
                                        : null
                                    )
                                }
                                <li className="nav-item">
                                    <a className="nav-link" href="#">난이도별</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input onChange={onChange} onKeyPress={onKeyPress} class="form-control me-2" type="search" placeholder="문제 검색" aria-label="Search" />
                                <button onClick={onClick} class="btn btn-outline-secondary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </Container>
            <LoginCheck />
        </>

    );
}

function LoginCheck() {
    if (sessionStorage.getItem("access_token")) {
        return (
            <Welcome><b>{sessionStorage.getItem("nickname")}</b>님 환영합니다!</Welcome>
        )
    }
    return (<></>)
}

const Container = styled.div`
    border-bottom: 1px rgb(219 221 224) solid;
`

const Welcome = styled.span`
    position: absolute;
    right: 0.5%;
    padding: 0.5%;
`

export default HeaderMain;
