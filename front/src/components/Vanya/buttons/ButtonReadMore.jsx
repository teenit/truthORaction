import React from "react";
import './ButtonReadMore.css'

const ButtonReadMore = (props) => {
    return(
        <div className="ButtonReadMore">
            <div className="ButtonReadMore-inner" onClick={props.click}>
                <div className="ButtonReadMore-text">Learn More</div>
                <div className="ButtonReadMore-icon">&#10148;</div>
            </div>
        </div>
    )
}

export default ButtonReadMore;