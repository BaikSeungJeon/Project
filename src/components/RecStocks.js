import React from 'react';
import './RecStocks.css';

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
