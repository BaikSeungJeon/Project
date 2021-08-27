/* eslint-disable */

import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <div className="header" style = {{
            position : "fixed",
            top : "0",
            width : "100vw",
            backgroundColor : "#fff",
            fontWeight : "700",
            height : "40px",
            padding : "5px 20px 0",
            display : "flex",
            flexDirection : "row",
            justifyContent : "space-between"
        }}>

            <p style = {{
                fontSize : "16px",
                color : "#000"
            }}>
                22:50
            </p>

            <div className="wifi" style = {{
            }}>
                <img src="https://img.icons8.com/ios-glyphs/18/000000/low-connection.png"/>
                <img src="https://img.icons8.com/ios/18/000000/wifi--v1.png" style = {{
                    margin : "0 5px"
                }}/>
                <img src="images/battery.png" style = {{
                    width : "24px",
                    height : "24px"
                }}/>
            </div>

        </div>
        
    )
}

export default Header
