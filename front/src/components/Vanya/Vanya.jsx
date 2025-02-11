const inner = document.getElementById('inner')
import {Button, TextField } from "@mui/material";
import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
export function SwitchLabels() {
    return (
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel required control={<Switch />} label="Required" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>
    );
  }

const Vanya = () => {
const [state, setState] = useState({
    login: "",
    password: ""
})

const send = () =>{
    console.log(state);
    
}

const Change = () =>{
    if(inner.style.backgroundColor == "rgb(39, 39, 39)"){
        inner.style.backgroundColor = "white"
    }else{
        inner.style.backgroundColor = "rgb(39, 39, 39)"
    }
}

    return (
        <div>
            <div className="Ivan-form">
                <TextField label="Login" value={state.login} onChange={(e)=>{
                    setState({...state,login: e.target.value})
                    
                }}/>
                <TextField label="Password" type="password" value={state.password} onChange={(e)=>{
                    setState({...state,password: e.target.value})
                }}/>
                <Button variant="contained"onClick={send}>Enter</Button>
                <FormControlLabel onClick={Change} control={<Switch defaultChecked />} label="" />
            </div>
        </div>
    )
}

export default Vanya;