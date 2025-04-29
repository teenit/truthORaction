import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { FaUser, FaCog } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import './NavMain.scss';
import SwitcherTheme from "../Vanya/SwitcherTheme";

const NavMain = () => {
    const navigate = useNavigate();
    const [openSettings, setOpenSettings] = useState(false)

    return (
        <>
         <div className="NavMain">
            <div className="NavMain-left">
                <Button onClick={() => { navigate("/") }} >Home</Button>
                <Button onClick={() => { navigate("/vanya") }} > <FaUser /> Vaniy</Button>
                <Button onClick={() => { navigate("/denis") }} >Denis</Button>
                <Button onClick={() => { navigate("/pavlo") }} >Pavlo</Button>
            </div>
            <div className="NavMain-right">
                <Button
                    id="basic-button"
                    aria-controls={openSettings ? 'basic-menu' : undefined}
                    onClick={() => {
                        setOpenSettings(!openSettings)
                    }}
                >
                    <FaCog />
                </Button>
            {openSettings && 
             <div className="NavMain-right-menu">
                <p style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><SwitcherTheme /> Theme</p>
                <p>Item reker geriugberuig eiuhufre ireugierhgue rgueirghieurhger g erugiheruighuerhg 2</p>
                <p>Item 3</p>
                <p>Item 4</p>
            </div>
            }
           
            </div>
            
        </div>
        <div className="line"></div>
        </>
       
    )
}

export default NavMain;