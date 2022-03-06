/* eslint-disable */

import React, {useState} from 'react' // useState
import styled from 'styled-components' // css
import Price from '../../price.js' // Price(홈 주식 가격)
import Stocks from './Stocks.js' // 종목
import RecStocks from './RecStocks' // 추천 종목
import './Home.css'

function Home() {

    let [price, priceChange] = useState(Price);
    // price, price변화를 주는 값 state 생성
    // 그리고 그 안에 import 해온 Price 넣기

    return (
        <div className='home'>
            {/* 메인 화면 상단 */}
            <div className="home-top">

                {/* 상단 알람, 로그인, 설정 부분 */}
                <div className="home-setting-nav"> 
                    <img src="https://img.icons8.com/material-outlined/24/000000/appointment-reminders--v1.png"/>
                    <div className="home-setting">
                        <h3>초기화면설정</h3>
                        <img src="https://img.icons8.com/fluency-systems-regular/24/000000/shutdown.png"/>
                        <img src="https://img.icons8.com/ios-filled/24/000000/settings.png"/>
                    </div>
                </div>

                {/* 상단 첫 번째 탭 */}
                <ul className="home-first-tab"> 
                    <li>해외주식</li>
                    <li>해외선물옵션</li>
                    <li>FX마진</li>
                </ul>

                {/* 상단 두 번째 탭 */}
                <ul className="home-second-tab"> 
                    <li>관심종목</li>
                    <li>최근조회종목</li>
                </ul>

                {/* 주가 박스 */}
                <Stocks price={price}/> 

                {/* '...' 페이지 아이콘 */}
                <div className="home-page-icon"> 
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </div>

                {/* 메인 화면 중간에 위치한 네비게이션 */}
                <ul className="home-sub-nav"> 
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

            {/* 메인 화면 하단 */}
            <div className="home-btm"> 

                {/* 메인 화면 하단의 추천 종목 */}
                <div className="home-btm-rec"> 
                    <h1>해외주식 추천종목</h1>
                    <ul>
                        <li>미국</li>
                        <li>중국</li>
                        <li>홍콩</li>
                        <li>ETF</li>
                    </ul>
                </div>
                <div className="home-btm-stock">

                    <RecStocks price={price[0]}/>
                    <RecStocks price={price[1]}/>
                    <RecStocks price={price[2]}/>
                    <RecStocks price={price[3]}/>

                    <div className="home-btm-rec-more">
                        <h3> 추천 종목 더 보기 </h3>
                        <img src="https://img.icons8.com/fluency-systems-filled/48/000000/circled-chevron-right.png"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home
