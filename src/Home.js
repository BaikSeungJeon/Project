/* eslint-disable */

import React, {useState} from 'react'; /* useState 쓰기 위해 import 해 오기 */
import styled from 'styled-components'; /* css */
import Price from './price.js'; /* Price(홈 주식 가격) import 해 오기 */
import Stocks from './components/Stocks.js'; /* Stocks import 해 오기 */
import RecStocks from './components/RecStocks'; /* RecStocks import 해 오기 */
import './components/Home.css';

function Home() {

    let [price, priceChange] = useState(Price);
    // price, price변화를 주는 값을 state 만들기
    // 그리고 그 안에 import 해온 Price 넣기

    return (
        <div>
            <div className="section1">
                <div className="setting-bar">
                    <img src="https://img.icons8.com/material-outlined/24/000000/appointment-reminders--v1.png"/>
                    <div className="setting">
                        <h3>초기화면설정</h3>
                        <img src="https://img.icons8.com/fluency-systems-regular/24/000000/shutdown.png"/>
                        <img src="https://img.icons8.com/ios-filled/24/000000/settings.png"/>
                    </div>
                </div>

                <ul className="first-tab">
                    <li>해외주식</li>
                    <li>해외선물옵션</li>
                    <li>FX마진</li>
                </ul>    
                <ul className="second-tab">
                    <li>관심종목</li>
                    <li>최근조회종목</li>
                </ul>

                
                <Stocks price={price}/>
                

                <div className="page-icon">
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </div>
                <ul className="sub-nav">
                    <li>
                        관심종목
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png"/>
                    </li>
                    <li>
                        시세분석
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png"/>
                    </li>
                    <li>
                        ETF시세
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png"/>
                    </li>
                    </ul>
            </div>
        
            <div className="section2">
                <div className="sec2-hd">
                    <h1>해외주식 추천종목</h1>
                    <ul>
                        <li>미국</li>
                        <li>중국</li>
                        <li>홍콩</li>
                        <li>ETF</li>
                    </ul>
                </div>
                <div className="sec2-content">

                    <RecStocks price={price[0]}/>
                    <RecStocks price={price[1]}/>
                    <RecStocks price={price[2]}/>
                    <RecStocks price={price[3]}/>

                    <div className="rec-more">
                        <h3> 추천 종목 더 보기 </h3>
                        <img src="https://img.icons8.com/fluency-systems-filled/48/000000/circled-chevron-right.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
