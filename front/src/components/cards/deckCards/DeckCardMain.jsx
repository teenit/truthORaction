import React from "react";
import Card from "../Card";
import TruthCard from "../animated-cards/TruthCard";
import ActionCard from "../animated-cards/ActionCard";
import Deck from "../Deck";

const DeckCardMain = () => {

  return(
    <>
      <div className="container">
        <Deck />
      </div>      
    </>
  )
}

export default DeckCardMain;