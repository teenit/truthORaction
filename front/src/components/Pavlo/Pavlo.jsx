import { Button, TextField } from "@mui/material";
import React, { useState } from "react";


const Pavlo = () => {
const [state, setState] = useState({
    login: "",
    password: ""
});

const send = () => {
    console.log(state)
}

    return (
        <div>
            <div className="Pavlo-form">
                <TextField label="Login" value={state.login} onChange={(e)=>{
                    setState({...state, login: e.target.value})
                }}/>
                <TextField label="Password" type="password" value={state.password} onChange={(e)=>{
                    setState({...state, password: e.target.value})
                }}/>
                <Button variant="outlined" size="large" onClick={send}>Enter</Button>
            </div>
        </div>
    )
}

export default Pavlo;