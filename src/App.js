/* eslint-disable */

import React, {useState} from 'react'; /* useState 쓰기 위해 import 해 오기 */
import './App.css';
import { Nav, Navbar, Container } from 'react-bootstrap'; /* bootstrap */
import { Link, Route, Switch } from 'react-router-dom'; /* router dom */
import styled from 'styled-components'; /* css */

import Header from './components/Header'; /* Header import 해 오기 */
import Home from './Home.js'; /* 메인 화면(Home) import 해 오기 */
import Order from './components/Order'; /* 주문창 Order import 해 오기 */
import Footer from './components/Footer'; /* Footer import 해 오기 */

function App() {

  return (
    <div className="App">
      <Header/>

      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/order">
        <Order/>
      </Route>

      <Navbar bg="light" variant="light" style = {{
        position : "fixed",
        bottom : 0,
        width : "100vw"
      }}>
        <Container>
          <Navbar.Brand href="#menu">메뉴</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#order">주문</Nav.Link>
            <Nav.Link href="#chart">차트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Footer/>
    </div>
  );
}

export default App;
