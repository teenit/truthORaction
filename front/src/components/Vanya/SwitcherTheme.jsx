import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import React from "react";

const BODY_BLOCK = document.getElementsByTagName('body')[0]

const SwitcherTheme = () =>{
    const changeColor = (event) =>{
        console.log(event.target.checked);
        
        if(event.target.checked){
            BODY_BLOCK.className = "darkTheme"
        }else{
            BODY_BLOCK.className = "lightTheme"
        }
    }
    return(
        <div>
            <Switch onChange={changeColor}/>
        </div>
    )
}

export default SwitcherTheme;