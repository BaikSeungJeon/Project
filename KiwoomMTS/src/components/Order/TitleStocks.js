/* eslint-disable */

import React, {useState} from 'react'
import './Order.css'

function TitleStocks(props) {
    return (
        <div className="order-title-stocks">
            <p>{props.price.name}</p>
            <p>{props.price.price}</p>
            <p>{props.price.dodPrice}</p>
            <p>{props.price.dodPer}</p>
        </div>
    )
}

export default TitleStocks
