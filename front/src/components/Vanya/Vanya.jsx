import {Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import QuestionsWithTimer from "../Questions/QuestionsWithTimer";
import Call from "./CallButton/Call";
import CallBackButton from "./ActionButtons/CallBackButton/CallBackButton";
import MessageButton from "./ActionButtons/MessageButton/MessageButton";
import Loader from './../Loaders/Loader'
import './Vanya.scss'
import Card from "../cards/Card";
import Deck from "../cards/Deck";
import TruthCard from "../cards/animated-cards/TruthCard";
import ActionCard from "../cards/animated-cards/ActionCard";
import DeckCardMain from "../cards/deckCards/DeckCardMain";
const Vanya = () => {
const [loader,setLoader] = useState(true);
const [state, setState] = useState({
    login: "",
    password: ""
})

useEffect(()=>{
    setTimeout(() => {
        setLoader(true)
    }, 500);
}, [])

const send = () =>{
    console.log(state);
    
}




    return (
        <div className="Vanya">
            <div className="Ivan-form">
                {/* <TextField label="Login" value={state.login} onChange={(e)=>{
                    setState({...state,login: e.target.value})
                    
                }}/>
                <TextField label="Password" type="password" value={state.password} onChange={(e)=>{
                    setState({...state,password: e.target.value})
                }}/>
                <Button variant="contained"onClick={send}>Enter</Button> */}

                {/* <QuestionsWithTimer /> */}
                {/* <Call /> */}
                {/* <CallBackButton color={"rgb(0, 184, 0)"}/>
                <MessageButton color={"rgb(0, 105, 167)"}/> */}
                {/* {loader &&
                <Loader />} */}
            </div>
            <DeckCardMain />
        </div>
    )
}

export default Vanya;