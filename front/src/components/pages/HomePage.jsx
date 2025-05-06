import React, { useEffect, useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import Loader from "../Loaders/Loader";

const HomePage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])

    return(
        <div className="Page HomePage">
            {loader ? <Loader /> :
            <div>
                <h1>Truth or Action</h1>
                <h3>choose page:</h3>
                <Button onClick={() =>{navigate("/vanya")}} variant="contained">Vaniy</Button>
                <Button onClick={() =>{navigate("/denis")}} variant="contained">Denis</Button>
                <Button onClick={() =>{navigate("/pavlo")}} variant="contained">Pavlo</Button>
            </div>
            }
        </div>
    )
}

export default HomePage;