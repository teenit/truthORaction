import React from "react";
import { NavLink, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';

const HomePage = () => {
    const navigate = useNavigate();

    return(
        <div>
            <h1>Truth or Action</h1>
            <h3>choose page:</h3>
                <Button onClick={() =>{navigate("/vanya")}} variant="contained">Vaniy</Button>
                <Button onClick={() =>{navigate("/denis")}} variant="contained">Denis</Button>
                <Button onClick={() =>{navigate("/pavlo")}} variant="contained">Pavlo</Button>
        </div>
    )
}

export default HomePage;