/* eslint-disable */

import React, {useState} from 'react'; /* useState 쓰기 위해 import 해 오기 */
import './App.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Price from './price.js'; /* Price import 해 오기 */
import Stocks from './components/Stocks.js'; /* Stocks import 해 오기 */
import { Link, Route, Switc } from 'react-router-dom';
import styled from 'styled-components';

function App() {

  // price, price변화를 주는 값을 state 만들기
  // 그리고 그 안에 import 해온 Price 넣기
  let [price, priceChange] = useState(Price);
  
  return (
    <div className="App">

      <div className="header">
        <p>
          22:50
        </p>
        <div className="wifi">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/low-connection.png"/>
          <img src="https://img.icons8.com/ios/50/000000/wifi--v1.png"/>
          <img src="images/battery.png"/>
        </div>
      </div>

      <Route exact path="/">
        <div className="section1">
          <div className="sec1-hd">
            <img src="https://img.icons8.com/material-outlined/24/000000/appointment-reminders--v1.png"/>
            <div className="login">
              <img src="https://img.icons8.com/fluency-systems-regular/48/000000/shutdown.png"/>
              <img src="https://img.icons8.com/ios-filled/50/000000/settings.png"/>
            </div>
          </div>
          <ul className="first-tab">
            <li><h1>해외주식</h1></li>
            <li><h1>해외선물옵션</h1></li>
            <li><h1>FX마진</h1></li>
          </ul>    
          <ul className="secont-tab">
            <li><h3>관심종목</h3></li>
            <li><h3>최근조회종목</h3></li>
          </ul>

          {/* commponent + props 해주기 */}
          <Stocks price={price[0]} />
          <Stocks price={price[1]} />
          <Stocks price={price[2]} />
          <Stocks price={price[3]} />
          <div className="circle">
            <img src="https://img.icons8.com/material-outlined/24/000000/circled.png"/>
            <img src="https://img.icons8.com/material-outlined/24/000000/circled.png"/>
            <img src="https://img.icons8.com/material-outlined/24/000000/circled.png"/>
          </div>
          <ul className="quick-menu">
            <li>
              <h3>관심종목</h3>
              <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png"/>
            </li>
            <li>
              <h3>시세분석</h3>
              <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png"/>
            </li>
            <li>
              <h3>ETF시세</h3>
              <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png"/>
            </li>
          </ul>
        </div>
        {/* section1 */}
        
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
            <ul className="stock-1">
              <li><h3>애플</h3></li>
              <li><h3>148.3600</h3></li>
              <li>0.0000</li>
              <li>0.00%</li>
            </ul>
            <ul className="stock-2">
              <li><h3>페이스북</h3></li>
              <li><h3>368.3900</h3></li>
              <li>0.0000</li>
              <li>0.00%</li>
            </ul>
            <ul className="stock-3">
              <li><h3>아마존 닷컴</h3></li>
              <li><h3>3,299.1800</h3></li>
              <li>0.0000</li>
              <li>0.00%</li>
            </ul>
            <ul className="stock-4">
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
        {/* section2 */}
      </Route>

      <Route path="/order">

      </Route>

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#menu">메뉴</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#order">주문</Nav.Link>
            <Nav.Link href="#chart">차트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div div className="footer">
          
      </div>
    </div>
  );
}

export default App;
