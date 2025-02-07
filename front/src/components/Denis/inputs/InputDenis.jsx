import React from "react";
import './InputDenis.css'
const InputDenis = (props) => {
    return (
        <div className="InputDenis">
            <input type="text" placeholder="Enter your info" value={props.value}/>
        </div>
    )
}
export default InputDenis