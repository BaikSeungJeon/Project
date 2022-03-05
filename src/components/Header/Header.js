/* eslint-disable */

import React from 'react'
import './Header.css'
import styled from 'styled-components'

function Header() {
    return (
        <div className="header">
            <div className="header-time">
                <p>22:50</p>
            </div>
            <div className="header-icon">
                <img src="https://img.icons8.com/ios-glyphs/18/ffffff/low-connection.png"/>
                <img src="https://img.icons8.com/ios-glyphs/18/ffffff/wifi--v1.png"/>
                <img src="https://img.icons8.com/ios-glyphs/20/ffffff/full-battery.png"/>
            </div>
        </div>
    )
}

export default Header
