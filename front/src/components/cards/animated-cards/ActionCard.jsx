import React, {useState} from 'react';
import './Action.scss';

const ActionCard = ({isAnimating = false}) =>{

    return(
      <div
        className={`ActionCard ${isAnimating ? 'animateCardA' : ''}`}
      ></div>
    )
}

export default ActionCard;