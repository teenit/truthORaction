import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {

    return(
        <div>
            <NavLink to={"/vanya"}>Vanya</NavLink>
            <NavLink to={"/denis"}>Denis</NavLink>
            <NavLink to={"/pavlo"}>Pavlo</NavLink>
        </div>
    )
}

export default HomePage;