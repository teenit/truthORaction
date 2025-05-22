import React, {useState} from 'react';
import './TruthCard.scss';

const TruthCard = ({isAnimating = false}) =>{
    return(
      <div
        className={`truthCard ${isAnimating ? 'animateCard' : ''}`}
      ></div>
    )
}

export default TruthCard;