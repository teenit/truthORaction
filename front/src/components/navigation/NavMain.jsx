import { Button } from "@mui/material";
import React from "react";
import { FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import './NavMain.scss';

const NavMain = () => {
    const navigate = useNavigate()

    return(
        <div>
            <Button onClick={() =>{navigate("/")}} >Home</Button>
            <Button onClick={() =>{navigate("/vanya")}} > <FaUser /> Vaniy</Button>
            <Button onClick={() =>{navigate("/denis")}} >Denis</Button>
            <Button onClick={() =>{navigate("/pavlo")}} >Pavlo</Button>
            <div className="line"></div>
        </div>
    )
}

export default NavMain;