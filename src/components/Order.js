/* eslint-disable */

import React, {useState, useMemo} from 'react'; /* 호가 state 때문에 useState 추가해주기 */
/* select 때문에 useMemo 추가 */
import styled from 'styled-components'; /* css */
import { Link } from 'react-router-dom'; /* router dom */
import Select from "react-select";  /* react-select */
import AskingPrice from './askingPrice'; /* 호가 가격 import 해 오기 */
import RecStocks from './RecStocks'; /* RecStocks import 해 오기 */
import Price from '../price.js'; /* Price(홈 주식 가격) import 해 오기 */
import './Order.css';


function Order(props) {

    const account = useMemo(
        () => [
            { value : "acount1", label : "1234-5678[종합]" },
            { value : "acount2", label : "1357-2468[주식]" },
        ],[]);
    const buy = useMemo(
        () => [
            { value : "buy1", label : "지정가"},
            { value : "buy2", label : "시장가"},
            { value : "buy3", label : "LOC"},
        ], []);
    const buyCan = useMemo(
        () => [
            { value : "10%", label : "10%" },
            { value : "25%", label : "25%" },
            { value : "50%", label : "50%" },
            { value : "75%", label : "75%" },
            { value : "90%", label : "90%" },
            { value : "100%", label : "전부" },
        ],[]);    
    let [price, priceChange] = useState(Price);
    let [askingPrice, askingPriceChange] = useState(AskingPrice); /* 호가, 호가 변경 state 해 오기*/

    return (
        <div>
            <div className="order-nav">
                <img src="https://img.icons8.com/ios/20/000000/back--v1.png"/>
                <ul>
                    <li>주식주문</li>
                    <li>주식미체결</li>
                    <li>주식잔고</li>
                    <li>예약주문/조회</li>
                    <li>쾌속주문</li>
                    <li>주식호가주문</li>
                    <li>미국주식 자동감시주문</li>
                </ul>
                <img src="https://img.icons8.com/ios/24/000000/more-than.png"/>
                <img src="https://img.icons8.com/material-rounded/24/000000/menu-2.png"/>
            </div>
            <div className="order-hd">
                <img src="https://img.icons8.com/ios/20/000000/back--v1.png"/>
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
                <img src="https://img.icons8.com/ios/24/000000/more-than.png"/>
                <div className="order-nav-2">
                    <ul>
                        <li>매수</li>
                        <li>매도</li>
                        <li>정정/취소</li>
                        <li>잔고</li>
                        <li>미체결</li>
                    </ul>
                </div>
                <div className="order-main">
                    <div className="asking-price">
                        <div className="ap-chart">
                            <img src="images/chart.png"/>
                        </div>
                        <div className="sell">
                            <div className="sell-left">
                                <p>{askingPrice[0].usd}</p>
                                <p>{askingPrice[0].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[0].per}</p>
                            </div>
                        </div>
                        <div className="sell">
                            <div className="sell-left">
                                <p>{askingPrice[1].usd}</p>
                                <p>{askingPrice[1].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[1].per}</p>
                            </div>
                        </div>
                        <div className="sell">
                            <div className="sell-left">
                                <p>{askingPrice[2].usd}</p>
                                <p>{askingPrice[2].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[2].per}</p>
                            </div>
                        </div>
                        <div className="sell">
                            <div className="sell-left">
                                <p>{askingPrice[3].usd}</p>
                                <p>{askingPrice[3].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[3].per}</p>
                            </div>
                        </div>
                        <div className="sell">
                            <div className="sell-left">
                                <p>{askingPrice[4].usd}</p>
                                <p>{askingPrice[4].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[4].per}</p>
                            </div>
                        </div>
                        <div className="sell">
                            <div className="sell-left">
                                <p>{askingPrice[5].usd}</p>
                                <p>{askingPrice[5].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[5].per}</p>
                            </div>
                        </div>
                        <div className="sell">
                            <div className="sell-left">
                                <p>{askingPrice[6].usd}</p>
                                <p>{askingPrice[6].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[6].per}</p>
                            </div>
                        </div>
                        <div className="sell">
                            <div   div className="sell-left">
                                <p>{askingPrice[8].usd}</p>
                                <p>{askingPrice[8].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[8].per}</p>
                            </div>
                        </div>
                        <div className="sell">
                            <div className="sell-left">
                                <p>{askingPrice[9].usd}</p>
                                <p>{askingPrice[9].krw}</p>
                            </div>
                            <div className="sell-right">
                                <p>{askingPrice[9].per}</p>
                            </div>
                        </div>
                        <div className="buy">
                            <div className="buy-left">
                                <p>{askingPrice[0].usd}</p>
                                <p>{askingPrice[0].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[0].per}</p>
                            </div>
                        </div>
                        <div className="buy">
                            <div className="buy-left">
                                <p>{askingPrice[1].usd}</p>
                                <p>{askingPrice[1].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[1].per}</p>
                            </div>
                        </div>
                        <div className="buy">
                            <div className="buy-left">
                                <p>{askingPrice[2].usd}</p>
                                <p>{askingPrice[2].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[2].per}</p>
                            </div>
                        </div>
                        <div className="buy">
                            <div className="buy-left">
                                <p>{askingPrice[3].usd}</p>
                                <p>{askingPrice[3].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[3].per}</p>
                            </div>
                        </div>
                        <div className="buy">
                            <div className="buy-left">
                                <p>{askingPrice[4].usd}</p>
                                <p>{askingPrice[4].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[4].per}</p>
                            </div>
                        </div>
                        <div className="buy">
                            <div className="buy-left">
                                <p>{askingPrice[5].usd}</p>
                                <p>{askingPrice[5].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[5].per}</p>
                            </div>
                        </div>
                        <div className="buy">
                            <div className="buy-left">
                                <p>{askingPrice[6].usd}</p>
                                <p>{askingPrice[6].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[6].per}</p>
                            </div>
                        </div>
                        <div className="buy">
                            <div className="buy-left">
                                <p>{askingPrice[7].usd}</p>
                                <p>{askingPrice[7].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[7].per}</p>
                            </div>
                        </div>
                        <div className="buy">
                            <div className="buy-left">
                                <p>{askingPrice[8].usd}</p>
                                <p>{askingPrice[8].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[8].per}</p>
                            </div>
                        </div>
                        <div className="buy">
                            <div className="buy-left">
                                <p>{askingPrice[9].usd}</p>
                                <p>{askingPrice[9].krw}</p>
                            </div>
                            <div className="buy-right">
                                <p>{askingPrice[9].per}</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-tab">
                        <Select account={account} defaultValue={account[0]} isClearable />
                        <div className="order-pw">
                            <button> 설정 </button>
                            <input type="password" placeholder="비밀번호"/>
                        </div>

                        <dl className="order-input">
                            <dt>종류</dt>
                            <dd>
                                <Select buy={buy} defaultValue={buy[0]} isClearable />
                                <input type="checkbox"/> 미수
                            </dd>
                            <dt>수량(1주)</dt>
                            <dd>
                                <button>-</button><input type="number"></input><button>+</button>
                                <Select buyCan={buyCan} defaultValue={buyCan[5]} isClearable />
                            </dd>
                            <dt>가격(USD)</dt>
                            <dd>
                                <button>-</button>{askingPrice[4].usd}<button>+</button>
                            </dd>
                            <dt>가격(KRW)</dt>
                            <dd>
                                <button>-</button>{askingPrice[4].usd}<button>+</button>
                            </dd>
                        </dl>
                        <div className="exchange-rate">
                            <div className="ex-top">
                                <div>
                                    환율
                                </div>
                                <div>
                                    $
                                </div>
                                <div>
                                    0.0000
                                </div>
                            </div>
                            <div className="ex-btm">
                                <div>
                                    1,167.00
                                </div>
                                <div>
                                    ￦
                                </div>
                                <div>
                                    0
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="order-btn">
                            <li>안내</li>
                            <li>잔고</li>
                            <li>환전</li>
                            <li>주문번호</li>
                            <li>매수 주문</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Order
