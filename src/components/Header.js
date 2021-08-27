/* eslint-disable */

import React from 'react';
import './Header.css';
import styled from 'styled-components';

function Header() {
    return (
        <div className="header">
            <div className="time">
                <p>22:50</p>
            </div>
            <div className="wifi">
                <img src="https://img.icons8.com/ios-glyphs/18/000000/low-connection.png"/>
                <img src="https://img.icons8.com/ios/18/000000/wifi--v1.png"/>
                <img src="images/battery.png"/>
            </div>
        </div>
    )
}

export default Header
