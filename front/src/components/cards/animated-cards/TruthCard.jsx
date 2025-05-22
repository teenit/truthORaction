import React, {useState} from 'react';
import './TruthCard.scss';

const TruthCard = () =>{
  const [isAnimating, setIsAnimating] = useState(false);

const handleClick = () => {
  setIsAnimating(false);
  setTimeout(() => setIsAnimating(true), 0); // ← Надійний reset
};
    return(
    <div className="container">
      <div
        className={`truthCard ${isAnimating ? 'animateCard' : ''}`}
        onClick={handleClick}
      ></div>
    </div>
    )
}

export default TruthCard;