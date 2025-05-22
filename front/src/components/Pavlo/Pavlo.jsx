import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import CallBackButton from "./ActionButtons/CallBackButton";
import { FaUser } from 'react-icons/fa';
import { FaAccusoft } from "react-icons/fa";
import DeckCardMain from "../cards/deckCards/DeckCardMain";

const Pavlo = () => {
    const [state, setState] = useState({
        login: "",
        password: ""
    });

    const send = () => {
        console.log(state)
    }

    return (
        <div style={{position:'relative'}}>
            <div className="Pavlo-form">
                <TextField label="Login" value={state.login} onChange={(e) => {
                    setState({ ...state, login: e.target.value })
                }} />
                <TextField label="Password" type="password" value={state.password} onChange={(e) => {
                    setState({ ...state, password: e.target.value })
                }} />
                <Button variant="outlined" size="large" onClick={send}>Enter</Button>
            </div>

            <CallBackButton
                position={{
                    left: "200px",
                    top: "300px"
                }} 
                color="#ffd045" 
                FaUser={FaUser} 
                borderRadius={"12px"}
                />
                <CallBackButton
                position={{
                    right: "200px",
                    top: "300px"
                }} 
                color="#ffd045" 
                FaUser={FaAccusoft} 
                borderRadius={"12px"}
                />
                <CallBackButton
                position={{
                    left: "100px",
                    top: "300px"
                }} 
                color="#f45" 
                FaUser={FaUser} 
                borderRadius={"24px"}
                />


            <CallBackButton  FaUser={FaUser} />
            <DeckCardMain />
        </div>
    )
}

export default Pavlo;