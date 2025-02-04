import React from "react";
import './ButtonLearnMore.css';

const ButtonLearnMore = (props) => {

    return (
        <div className="ButtonLearnMore">
            <div className="ButtonLearnMore-inner" onClick={props.click}>
                <div className="ButtonLearnMore-text">Learn More</div>
                <div className="ButtonLearnMore-icon">&#10148;</div>
            </div>
        </div>
    )
}

export default ButtonLearnMore;