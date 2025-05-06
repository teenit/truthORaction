import React, { useState, useEffect } from "react"; 
import { Button, TextField } from "@mui/material";
import Loader from "../Loaders/Loader";

const Denis = () => {
const [loader, setLoader] = useState(true)
const [state, setState] = useState({
    login: "",
    password: ""
});

useEffect(()=>{
    setTimeout(()=>{
        setLoader(false)
    },2000)
}, []) 

const send = () => {
    console.log(state);
    
}
    return (
        <div>
            <div className="Denis-form">
            { loader &&
             <Loader />}
                {/* <TextField label="Login" value={state.login} onChange={(e)=>{
                    setState({...state, login: e.target.value})
                    
                }}/>
                <TextField label="Password" type="password" value={state.password}onChange={(e)=>{
                    setState({...state, password: e.target.value})
                    
                }}/>
                <Button onClick={send}>Enter</Button> */}

            </div>
        </div>
    )
}

export default Denis;