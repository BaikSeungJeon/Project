/* eslint-disable */

import React, {useState} from 'react'; /* useState 쓰기 위해 import 해 오기 */
import styled from 'styled-components'; /* css */
import Price from './price.js'; /* Price import 해 오기 */
import Stocks from './components/Stocks.js'; /* Stocks import 해 오기 */
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
                

                <div className="circle">
                    <img src="https://img.icons8.com/material-outlined/24/000000/circled.png"/>
                    <img src="https://img.icons8.com/material-outlined/24/000000/circled.png"/>
                    <img src="https://img.icons8.com/material-outlined/24/000000/circled.png"/>
                </div>
                <ul className="quick-menu">
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
                    <ul className="sec2-con-stock-1">
                        <li><h3>애플</h3></li>
                        <li><h3>148.3600</h3></li>
                        <li>0.0000</li>
                        <li>0.00%</li>
                    </ul>
                    <ul className="sec2-con-stock-2">
                        <li><h3>페이스북</h3></li>
                        <li><h3>368.3900</h3></li>
                        <li>0.0000</li>
                        <li>0.00%</li>
                    </ul>
                    <ul className="sec2-con-stock-3">
                        <li><h3>아마존 닷컴</h3></li>
                        <li><h3>3,299.1800</h3></li>
                        <li>0.0000</li>
                        <li>0.00%</li>
                    </ul>
                    <ul className="sec2-con-stock-4">
                        <li><h3>마이크로소프트</h3></li>
                        <li><h3>302.0100</h3></li>
                        <li>0.0000</li>
                        <li>0.00%</li>
                    </ul>
                    <div className="pick-stock">
                        <h3> 추천 종목 더 보기 </h3>
                        <img src="https://img.icons8.com/fluency-systems-filled/48/000000/circled-chevron-right.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
