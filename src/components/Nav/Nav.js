/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom'; /* router dom */
import './Nav.css';



function Nav() {

    const repository = "/project-react-mts";

    return (
        <div className="nav">
            <div className="nav-menu">
                <img src="images/kiwoom.png"/>
                <p>메뉴</p>
            </div>
            <ul className="gnb">
                <Link to = {repository + "/"}><li>관심 종목</li></Link>
                <Link to = {repository + "/order"}><li>주문</li></Link>
                <Link to = {repository + "/"}><li>시세</li></Link>
                <Link to = {repository + "/"}><li>차트</li></Link>
                <Link to = {repository + "/"}><li>계좌</li></Link>
                <Link to = {repository + "/"}><li>ETF</li></Link>
                <Link to = {repository + "/"}><li>ETF 조건검색</li></Link>
                <Link to = {repository + "/"}><li>원화주문</li></Link>
            </ul>
        </div>
    )
}

export default Nav
