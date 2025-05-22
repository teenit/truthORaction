import React, {useState} from 'react';
import './Action.scss';

const ActionCard = () =>{
  const [isAnimating, setIsAnimating] = useState(false);

const handleClick = () => {
  setIsAnimating(false);
  setTimeout(() => setIsAnimating(true), 0); // ← Надійний reset
};
    return(
    <div className="container">
      <div
        className={`ActionCard ${isAnimating ? 'animateCardA' : ''}`}
        onClick={handleClick}
      ></div>
    </div>
    )
}

export default ActionCard;