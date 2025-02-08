import React, { useState } from "react";
import ButtonLearnMore from "./Buttons/ButtonLearnMore";
import InputPavlo from "./Inputs/InputPavlo";

const Pavlo = () => {
const [state, setState] = useState("World");

    return (
        <div>
            <ButtonLearnMore click={()=>{
                let count = Math.random();
                setState("Hello" + count)
            }}/>
            <InputPavlo value={state}/>
        </div>
    )
}

export default Pavlo;