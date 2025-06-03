import React from "react";
import './Card.scss';

const Card = ({question = "", color = ""}) =>{

    return(
        <div className="Card" style={{backgroundColor: color}}>
            <div>{question}</div>
        </div>
    )
}

export default Card;