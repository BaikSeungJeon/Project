/* eslint-disable */

import React, {useState, useMemo} from 'react' // 호가 state 때문에 useState 추가해주기
// select 때문에 useMemo 추가
import styled from 'styled-components' // css
import { Link } from 'react-router-dom' // router dom
import Select from "react-select"  // react-select
import AskingPrice from './askingPrice' // 호가 가격
import TitleStocks from './TitleStocks.js' // 추천 종목
import Price from '../../price.js' // Price(홈 주식 가격)
import './Order.css'
import Modal from './Modal' // 체결 모달


function Order(props) {
    
    let [price, priceChange] = useState(Price);
    let [askingPrice, askingPriceChange] = useState(AskingPrice); // 호가, 호가 변경 state 해 오기
    let [modal, modalChange] = useState(false);

    return (
        
        <div className='order'>

            {/* 주문창의 네비게이션 */}
            <div className="order-nav"> 
                <div className="order-nav-lbtn"> {/* 왼쪽 버튼 */} 
                    <img src="https://img.icons8.com/ios/26/000000/back--v1.png"/>
                </div>

                <div className="order-nav-md"> {/* 메인 네비게이션 */}
                    <ul>
                        <Link to = "/"><li>주식주문</li></Link>
                        <Link to = "/"><li>주식미체결</li></Link>
                        <Link to = "/"><li>주식잔고</li></Link>
                        <Link to = "/"><li>예약주문/조회</li></Link>
                        <Link to = "/"><li>쾌속주문</li></Link>
                        <Link to = "/"><li>주식호가주문</li></Link>
                        <Link to = "/"><li>미국주식 자동감시주문</li></Link>
                    </ul>
                </div>

                <div className="order-nav-rbtn"> {/* 오른쪽 버튼 */}
                    <img src="https://img.icons8.com/ios/30/000000/more-than.png"/>
                    <img src="https://img.icons8.com/material-rounded/30/000000/menu-2.png"/>
                </div>
            </div>
            
            {/* 주문 hd 쪽 ui */}
            <div className="order-hd"> 
                <div className="order-hd-lbtn">
                    <img src="https://img.icons8.com/ios/26/000000/back--v1.png"/>
                </div>

                {/* 주문 hd 쪽 정보 */}
                <div className="order-info"> 
                    <img src="https://img.icons8.com/officel/30/000000/candle-sticks.png"/>
                    <div className="order-info-container">
                        <div className="order-info-top">
                            <ul>
                                <li>무료</li>
                                <li>증100</li>
                                <li>AAPL/NASDAQ</li>
                                <li><img src="https://img.icons8.com/material-outlined/24/000000/appointment-reminders--v1.png"/></li>
                                <li><img src="https://img.icons8.com/material-outlined/24/000000/star--v2.png"/></li>
                                <li><img src="https://img.icons8.com/ios-glyphs/24/000000/search--v1.png"/></li>
                            </ul>
                        </div>
                        <div className="order-info-btm">
                            <TitleStocks price={price[0]}/>
                        </div>
                    </div>
                </div>
                <div className="order-hd-rbtn">
                    <img src="https://img.icons8.com/ios/30/000000/more-than.png"/>
                </div>
            </div>
            
            <div className="order-nav-2">
                <ul>
                    <li>매수</li>
                    <li>매도</li>
                    <li>정정/취소</li>
                    <li>잔고</li>
                    <li>미체결</li>
                </ul>
            </div>

            {/* 메인 */}
            <div className="order-main">

                {/* 호가창 */}
                <div className="order-asking-price">
                    <div className="ap-chart">
                        <img src="images/chart.png"/>
                        <div className="ap-btn">
                            <button>호가</button>
                            <button>잔량</button>
                            <button>체결</button>
                        </div>
                    </div>

                    {/* 호가창 박스 */}
                    <div className="ap-box">
                        <div className="sell-box">
                            <div className="sell-left">
                                <p>{askingPrice[0].usd}</p>
                                <p>{askingPrice[0].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[0].per}</p>
                            </div>
                        </div>
                        <div className="sell-box">
                            <div className="sell-left">
                                <p>{askingPrice[1].usd}</p>
                                <p>{askingPrice[1].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[1].per}</p>
                            </div>
                        </div>
                        <div className="sell-box">
                            <div className="sell-left">
                                <p>{askingPrice[2].usd}</p>
                                <p>{askingPrice[2].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[2].per}</p>
                            </div>
                        </div>
                        <div className="sell-box">
                            <div className="sell-left">
                                <p>{askingPrice[3].usd}</p>
                                <p>{askingPrice[3].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[3].per}</p>
                            </div>
                        </div>
                        <div className="sell-box">
                            <div className="sell-left">
                                <p>{askingPrice[4].usd}</p>
                                <p>{askingPrice[4].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[4].per}</p>
                            </div>
                        </div>
                        <div className="sell-box">
                            <div className="sell-left">
                                <p>{askingPrice[5].usd}</p>
                                <p>{askingPrice[5].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[5].per}</p>
                            </div>
                        </div>
                        <div className="sell-box">
                            <div className="sell-left">
                                <p>{askingPrice[6].usd}</p>
                                <p>{askingPrice[6].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[6].per}</p>
                            </div>
                        </div>
                        <div className="sell-box">
                            <div   div className="sell-left">
                                <p>{askingPrice[8].usd}</p>
                                <p>{askingPrice[8].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[8].per}</p>
                            </div>
                        </div>
                        <div className="sell-box">
                            <div className="sell-left">
                                <p>{askingPrice[9].usd}</p>
                                <p>{askingPrice[9].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[9].per}</p>
                            </div>
                        </div>
                        <div className="buy-box">
                            <div className="buy-left">
                                <p>{askingPrice[10].usd}</p>
                                <p>{askingPrice[10].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[10].per}</p>
                            </div>
                        </div>
                        <div className="buy-box">
                            <div className="buy-left">
                                <p>{askingPrice[11].usd}</p>
                                <p>{askingPrice[11].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[11].per}</p>
                            </div>
                        </div>
                        <div className="buy-box">
                            <div className="buy-left">
                                <p>{askingPrice[12].usd}</p>
                                <p>{askingPrice[12].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[12].per}</p>
                            </div>
                        </div>
                        <div className="buy-box">
                            <div className="buy-left">
                                <p>{askingPrice[13].usd}</p>
                                <p>{askingPrice[13].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[13].per}</p>
                            </div>
                        </div>
                        <div className="buy-box">
                                <div className="buy-left">
                                <p>{askingPrice[14].usd}</p>
                                <p>{askingPrice[14].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[14].per}</p>
                            </div>
                        </div>
                        <div className="buy-box">
                            <div className="buy-left">
                                <p>{askingPrice[15].usd}</p>
                                <p>{askingPrice[15].krw}</p>
                            </div>
                                <div className="buy-right">
                                <p>{askingPrice[15].per}</p>
                            </div>
                        </div>
                        <div className="buy-box">
                            <div className="buy-left">
                                <p>{askingPrice[16].usd}</p>
                                <p>{askingPrice[16].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[16].per}</p>
                            </div>
                        </div>
                        <div className="buy-box">
                            <div className="buy-left">
                                <p>{askingPrice[17].usd}</p>
                                <p>{askingPrice[17].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[17].per}</p>
                            </div>
                        </div>
                        <div className="buy-box">
                            <div className="buy-left">
                                <p>{askingPrice[18].usd}</p>
                                <p>{askingPrice[18].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[18].per}</p>
                            </div>
                        </div>
                        <div className="buy-box">
                            <div className="buy-left">
                                <p>{askingPrice[19].usd}</p>
                                <p>{askingPrice[19].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[19].per}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 오른쪽 계좌 정보 등 */}
                <div className="order-acc-info">
                    {/* 계좌 선택 */}
                    <div className="order-select-account">
                        <select defaultValue="1">
                            <option value="1">1234-5678[종합]</option>
                            <option value="2">1357-2468[주식]</option>
                        </select>
                    </div>
                    {/* 계좌 비밀번호 */}
                    <div className="order-pw">
                        <input type="button" value="설정" />
                        <input type="password" placeholder="비밀번호"/>
                    </div>
                    {/* 계좌 입력창들 */}
                    <div className="order-input">
                        <dl className="order-input-type">
                            <dt>종류</dt>
                            <dd>
                                <select defaultValue="3">
                                    <option value="1">지정가</option>
                                    <option value="2">시장가</option>
                                    <option value="3">LOC</option>
                                </select>
                                <input type="checkbox" />
                                미수
                            </dd>
                        </dl>
                        <dl className="order-input-vol">
                            <dt>수량</dt>
                            <dd>
                                <input type="button" value="-" />
                                <input type="number"></input>
                                <input type="button" value="+" />

                                <div className="order-input-can-btn">
                                    <select defaultValue="5">
                                        <option value="1">25%</option>
                                        <option value="2">50%</option>
                                        <option value="3">75%</option>
                                        <option value="4">100%</option>
                                        <option value="5">가능</option>
                                    </select>
                                    <input type="button" value="가능"/> 
                                </div>
                            </dd>
                        </dl>
                        <dl className="order-input-usd">
                            <dt>가격(USD)</dt>
                            <dd>
                                <input type="button" value="-" />
                                <input type="number" defaultValue="148.4300"/>
                                <input type="button" value="+" />
                            </dd>
                        </dl>
                        <dl className="order-input-krw">
                            <dt>가격(KRW)</dt>
                            <dd>
                                <input type="button" value="-" />
                                <input type="number" defaultValue="173,136"/>
                                <input type="button" value="+" />
                            </dd>
                        </dl>
                    </div>
                    {/* 계좌 환율 정보 */}
                    <div className="order-exchange-rate">
                        <div className="order-exchange-rate-top">
                            <div> 환율 </div>
                            <div> $ </div>
                            <div> 0.0000 </div>
                        </div>
                        <div className="order-exchange-rate-btm">
                            <div> 1,167.00 </div>
                            <div> ￦ </div>
                            <div> 0 </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 네비게이션 웨 하단 버튼 바 */}
            <ul className="order-btn-bar">
                <li>안내</li>
                <li>잔고</li>
                <li>환전</li>
                <li>주문번호</li>
                <li>매수 주문</li>
            </ul>

            {/* {
                modal === true
                ? <Modal/>
                : null
            } */}
            {/* 매수 주문 클릭 시 모달창 출력 임시 삭제 */}

        </div>
    )
}

export default Order
