import {Button, TextField } from "@mui/material";
import React, { useState } from "react";
import QuestionsWithTimer from "../Questions/QuestionsWithTimer";
import Call from "./CallButton/Call";
import CallBackButton from "./ActionButtons/CallBackButton/CallBackButton";
import MessageButton from "./ActionButtons/MessageButton/MessageButton";

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
                {/* <TextField label="Login" value={state.login} onChange={(e)=>{
                    setState({...state,login: e.target.value})
                    
                }}/>
                <TextField label="Password" type="password" value={state.password} onChange={(e)=>{
                    setState({...state,password: e.target.value})
                }}/>
                <Button variant="contained"onClick={send}>Enter</Button> */}

                <QuestionsWithTimer />
                {/* <Call /> */}
                <CallBackButton color={"rgb(0, 184, 0)"}/>
                <MessageButton color={"rgb(0, 105, 167)"}/>
            </div>
        </div>
    )
}

export default Vanya;