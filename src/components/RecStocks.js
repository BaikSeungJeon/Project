/* eslint-disable */

import React, {useState} from 'react';
import './RecStocks.css';
import './Order.css'; /* RecStocks 스타일 적용 위함 */

function RecStocks(props) {
    return (
        <div className="sec2-content-rec">
            <p>{props.price.name}</p>
            <p>{props.price.price}</p>
            <p>{props.price.dodPrice}</p>
            <p>{props.price.dodPer}</p>
        </div>
    )
}

export default RecStocks
