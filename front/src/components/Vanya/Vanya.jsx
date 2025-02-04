import React, { useState } from "react";
import Button from "./buttons/Button";
import ButtonReadMore from "./buttons/ButtonReadMore";
import InputIvan from "./Inputs/InputIvan";

const Vanya = () => {
const [state, setState] = useState("")
const [count, setCount] = useState(0)

    return (
        <div>
            <Button />
            <ButtonReadMore click={()=>{
                let count = Math.random();
                setState("hello" + count)
            }}/>
            <InputIvan value={state}/>
        </div>
    )
}

export default Vanya;