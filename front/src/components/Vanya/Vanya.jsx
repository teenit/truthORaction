import {Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Vanya = () => {
const [state, setState] = useState({
    login: "",
    password: ""
})

const send = () =>{
    console.log(state);
    
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
            </div>
        </div>
    )
}

export default Vanya;