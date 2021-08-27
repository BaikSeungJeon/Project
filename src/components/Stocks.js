/* eslint-disable */

import React from 'react'

function Stocks(props) {
    return (
        <div>
            <p>{props.price.name}</p>
            <p>{props.price.price}</p>
            <p>{props.price.dodPrice} {props.price.dodPer}</p>
        </div>
    )
}

{/* <div className="aapl">
            <p>{price[0].name}</p>
            <p>{price[0].price}</p>
            <p>{price[0].dodPrice} {price[0].dodPer}</p>
        </div>

        <div className="amzn">
            <p>{price[1].name}</p>
            <p>{price[1].price}</p>
            <p>{price[1].dodPrice} {price[1].dodPer}</p>
        </div>

        <div className="goog">
            <p>{price[2].name}</p>
            <p>{price[2].price}</p>
            <p>{price[2].dodPrice} {price[2].dodPer}</p>
        </div>

        <div className="msft">
            <p>{price[3].name}</p>
            <p>{price[3].price}</p>
            <p>{price[3].dodPrice} {price[3].dodPer}</p>
        </div> */}


export default Stocks
