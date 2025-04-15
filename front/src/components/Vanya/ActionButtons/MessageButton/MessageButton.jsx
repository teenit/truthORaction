import React from "react";
import messageImg from './MessageImg.png'
import './MessageButton.scss'

const MessageButton = (props) => {
    const {color} = props;
    return(
        <div className="MessageButton"style={{backgroundColor: color}}>
            <div className="MessageButton-animate MessageButton-animate-border"style={{borderColor: color}}></div>
            <div className="MessageButton-animate MessageButton-animate-background"style={{backgroundColor: color}}></div>
            <img className="MessageButton-img" src={messageImg} alt="" />
        </div>
    )
}

export default MessageButton;