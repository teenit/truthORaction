import React from "react";
import './CallBackButton.scss';
import callImagee from './CallImagee.png'

const CallBackButton = (props) => {
    const {color} = props;
    return(
        <div className="CallBackButton" style={{backgroundColor: color}}>
            <div className="CallBackButton-animate CallBackButton-animate-border" style={{borderColor: color}}></div>
            <div className="CallBackButton-animate CallBackButton-animate-background" style={{backgroundColor: color}}></div>
            <img className="CallBackButton-img" src={callImagee} alt="Логотип"/>
        </div>
    )
}

export default CallBackButton;