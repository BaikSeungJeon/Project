/* eslint-disable */

import React, {useState} from 'react';
import './Stocks.css';

function Stocks(props) {
    return (
        <div className="stock-box">
            <div className="stock-box-1">
                <p>{props.price[0].name}</p>
                <p>{props.price[0].price}</p>
                <p>{props.price[0].dodPrice} {props.price[0].dodPer}</p>
            </div>
            <div className="stock-box-2">
                <p>{props.price[1].name}</p>
                <p>{props.price[1].price}</p>
                <p>{props.price[1].dodPrice} {props.price[1].dodPer}</p>
            </div>
            <div className="stock-box-3">
                <p>{props.price[2].name}</p>
                <p>{props.price[2].price}</p>
                <p>{props.price[2].dodPrice} {props.price[2].dodPer}</p>
            </div>
            <div className="stock-box-4">
                <p>{props.price[3].name}</p>
                <p>{props.price[3].price}</p>
                <p>{props.price[3].dodPrice} {props.price[3].dodPer}</p>
            </div>
        </div>
        
    )
}

export default Stocks
