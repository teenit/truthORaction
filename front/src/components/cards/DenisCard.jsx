import React, { useState } from "react";
import './DenisCard.scss';

const DenisCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [type, setType] = useState("");

  const handleClick = (selectedType) => {
    setType(selectedType);
    setFlipped(true);
  };

  const getContent = () => {
    if (type === "truth") {
      return "Кого ти таємно симпатизуєш?";
    } else if (type === "dare") {
      return "Заспівай куплет улюбленої пісні!";
    } else {
      return "";
    }
  };

  return (
    <div className={`DenisCardWrapper ${flipped ? "flipped" : ""}`} onClick={() => flipped && setFlipped(false)}>
      <div className="DenisCardInner">
        <div className="DenisCard front">
          <div className="title">
            <button className="actionBtn" onClick={(e) => { e.stopPropagation(); handleClick("truth"); }}>Правда</button>
            <span> або </span>
            <button className="actionBtn" onClick={(e) => { e.stopPropagation(); handleClick("dare"); }}>Дія</button>
          </div>
        </div>
        <div className="DenisCard back">
          <div className="title">{getContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default DenisCard;
