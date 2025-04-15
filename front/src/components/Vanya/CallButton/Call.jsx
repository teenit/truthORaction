import React from "react";
import './Call.css';

const Call = () => {
    return (
        <div className="callBack">
            <div className="pulsing-circle"> </div>
            <div className="pulsing-border"></div>
            <div className="circle" style={{backgroundColor: "#123456"}}>
                <div className="icon"></div>
            </div>
        </div>
    )
}

export default Call;