/* eslint-disable */

import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div className="nav">
            <div className="nav-menu">
                <img src="images/kiwoom.png"/>
                <p>메뉴</p>
            </div>
            <ul className="gnb">
                <li>관심 종목</li>
                <li>주문</li>
                <li>시세</li>
                <li>차트</li>
                <li>계좌</li>
            </ul>
        </div>
    )
}

export default Nav
