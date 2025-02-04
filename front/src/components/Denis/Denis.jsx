import React, { useState } from "react"; 
import ButtonClickHere from "./Buttons/ButtonClickHere";
import ButtonSubcribe from "./Buttons/ButtonSubcribe";
import InputDenis from "./inputs/InputDenis";


const Denis = () => {
const [state, setState] = useState("Word")
    return (
        <div>
            <ButtonClickHere click={()=>{
                let count = Math.random();
                setState("Hello" + count)
                
            }}/>
            <ButtonSubcribe />
            <InputDenis value={state}/>
        </div>
    )
}

export default Denis;