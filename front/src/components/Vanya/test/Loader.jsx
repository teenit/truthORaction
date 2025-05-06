import React from 'react';
import './Loader.scss';
import CircularProgress from '@mui/material/CircularProgress';
const Loader =()=>{
    return(
        <div className='Loader'>
            <CircularProgress size={'75px'}/>
            <h4>Loading...</h4>
        </div>
    )
}

export default Loader;