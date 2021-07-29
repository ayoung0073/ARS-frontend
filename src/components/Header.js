import React from "react";
import styled from "styled-components";
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

function HeaderMain() {
    return (
        <Container>
            <nav className="navbar justify-content-center navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><b>ARS</b></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">문제 등록</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">난이도별</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="문제 검색" aria-label="Search" />
                            <button class="btn btn-outline-secondary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </Container>
    );
}

const Container = styled.div`
    border-bottom: 1px rgb(219 221 224) solid;
`

const Sub = styled.div`
    font-size: 12px;
`

export default HeaderMain;
