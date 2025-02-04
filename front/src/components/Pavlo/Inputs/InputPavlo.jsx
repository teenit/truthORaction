import React from "react";

const InputPavlo = (props) => {

    return (
        <div className="InputPavlo">
            <input type="text" placeholder="Enter your info" value={props.value}/>
        </div>
    )
}

export default InputPavlo;