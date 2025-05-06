import React from 'react';
import './Loader.scss';
import CircularProgress from '@mui/material/CircularProgress';
const Loader =()=>{
    return(
        <div className='Loader'>
            <CircularProgress size={'75px'}/>
        </div>
    )
}

export default Loader;