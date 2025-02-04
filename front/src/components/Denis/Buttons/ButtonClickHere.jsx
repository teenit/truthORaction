import React from "react";
import './ButtonClickHere.css'

const ButtonClickHere = (props) => {
    return (
        <div className="ButtonClickHere">
        <div className="ButtonClickHere-inner" onClick={props.click}>
        <div className="ButtonClickHere-text">Learn more</div>
        <div className="ButtonClickHere-icon"></div>
        </div>
        </div>
    )
}
export default ButtonClickHere