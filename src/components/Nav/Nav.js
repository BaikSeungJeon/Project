/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom'; /* router dom */
import './Nav.css';



function Nav() {
    return (
        <div className="nav">
            <div className="nav-menu">
                <img src="images/kiwoom.png"/>
                <p>메뉴</p>
            </div>
            <ul className="gnb">
                <Link to = "/"><li>관심 종목</li></Link>
                <Link to = "/order"><li>주문</li></Link>
                <Link to = "/"><li>시세</li></Link>
                <Link to = "/"><li>차트</li></Link>
                <Link to = "/"><li>계좌</li></Link>
                <Link to = "/"><li>ETF</li></Link>
                <Link to = "/"><li>ETF 조건검색</li></Link>
                <Link to = "/"><li>원화주문</li></Link>
            </ul>
        </div>
    )
}

export default Nav
