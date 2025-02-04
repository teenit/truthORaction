import React from "react";

const InputIvan = (props) => {
    return (
        <div className="InputIvan">
            <input type="text" placeholder="Enter your info" value={props.value} />
        </div>
    )
}

export default  InputIvan;