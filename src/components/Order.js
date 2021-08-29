/* eslint-disable */

import React, {useState} from 'react'; /* 호가 state 때문에 useState 추가해주기 */
import styled from 'styled-components'; /* css */
import { Link } from 'react-router-dom'; /* router dom */
import AskingPrice from './askingPrice'; /* 호가 가격 import 해 오기 */
import RecStocks from './RecStocks'; /* RecStocks import 해 오기 */
import Price from '../price.js'; /* Price(홈 주식 가격) import 해 오기 */
import './Order.css';


function Order(props) {

    let [price, priceChange] = useState(Price);
    let [askingPrice, askingPriceChange] = useState(AskingPrice); /* 호가, 호가 변경 state 해 오기*/

    return (
        <div>
            <ul className="order-nav">
                <li>주식주문</li>
                <li>주식미체결</li>
                <li>주식잔고</li>
                <li>예약주문/조회</li>
                <li>쾌속주문</li>
                <li>주식호가주문</li>
                <li>미국주식 자동감시주문</li>
            </ul>
            <div className="order-hd">
                <div className="order-candel">
                    <img src="images/candle.png"/>
                </div>
                <div className="order-ux">
                    <div className="order-ux-top">
                        <ul>
                            <li>무료</li>
                            <li>증100</li>
                            <li>AAPL/NASDAQ</li>
                            <li><img src="https://img.icons8.com/material-outlined/24/000000/appointment-reminders--v1.png"/></li>
                            <li><img src="https://img.icons8.com/material-outlined/24/000000/star--v2.png"/></li>
                            <li><img src="https://img.icons8.com/ios-glyphs/24/000000/search--v1.png"/></li>
                        </ul>
                    </div>
                    <div className="order-ux-btm">
                        <RecStocks price={price[0]}/>
                    </div>
                </div>
                <div className="order-nav-2">

                </div>
            </div>
        </div>
    )
}

export default Order
