import React from "react";
import './Loader.scss'
import { CircularProgress } from "@mui/material";
const Loader = () =>{
    return(
        <div className="Loader">
        <CircularProgress  size="100px" color="rgb(50, 152, 46"/><h2>Loading..<span>.</span></h2>
</div>
            )
}
export default Loader;