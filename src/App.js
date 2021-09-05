/* eslint-disable */

import React, {useState} from 'react'; /* useState 쓰기 위해 import 해 오기 */
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'; /* router dom */
import styled from 'styled-components'; /* css */

import Header from './components/Header/Header.js'; /* Header import 해 오기 */
import Home from './components/Home/Home.js'; /* 메인 화면(Home) import 해 오기 */
import Order from './components/Order/Order.js'; /* 주문창 Order import 해 오기 */
import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/Footer.js'; /* Footer import 해 오기 */
import Modal from './components/Order/Modal';

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

      <Nav/>

      <Footer/>
    </div>
  );
}

export default App;
