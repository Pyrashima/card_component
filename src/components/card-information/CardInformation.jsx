import React from 'react'
import "./CardInformation.css";

const CardInformation = () => {
    return (
        <div className="card-information">
            <img className="forme" src="././images/icon-ethereum.svg" loading='lazy'></img>
            <span className="right">0.0041ETH</span>
            <img className="clock" src="././images/icon-clock.svg" loading='lazy'></img>
            <time className="left"> 3 days left</time>
        </div>
    )
}

export default CardInformation