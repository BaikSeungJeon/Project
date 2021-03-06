/* eslint-disable */

import React, {useState} from 'react'; // useState 쓰기 위해 import 해 오기
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'; // router dom
import styled from 'styled-components'; // css */

import Header from './components/Header/Header.js'; // Header import 해 오기
import Home from './components/Home/Home.js'; // 메인 화면(Home) import 해 오기
import Order from './components/Order/Order.js'; // 주문창 Order import 해 오기
import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/Footer.js'; // Footer import 해 오기

function App() {
  const repository = "/project-react-mts"; // 깃허브 페이지 배포를 위해 레파지토리명을 변수에 담아 Route 붙이기
  return (
    <div className="App">
      <Header/>

      <Route exact path={repository + "/"}>
        <Home/>
      </Route>

      <Route path={repository + "/order"}>
        <Order/>
      </Route>

      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
