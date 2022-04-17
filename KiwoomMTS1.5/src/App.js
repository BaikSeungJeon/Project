/* eslint-disable */

import React, { useState } from 'react' // useState
import './App.css';
import { Link, Route, Switch } from 'react-router-dom' // router dom
import styled from 'styled-components'; // css

import Header from './components/Header/Header.js' // Header
import Home from './components/Home/Home.js' // 메인 화면(Home)
import Order from './components/Order/Order.js' // 주문창 Order
import Nav from './components/Nav/Nav.js' // Nav
import Footer from './components/Footer/Footer.js' // Footer

function App() {

  const repository = "/project-react-mts1.5"; // 깃허브 페이지 배포를 위해 레파지토리명을 변수에 담아 Route 프로퍼티에 지정
  
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
