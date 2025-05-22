import React from "react";
import "./Deck.scss";

const Deck = () =>{

    return(
        <div className="decks">
            <div className="deckOne">
                <div>Дія</div>
                <div className="card one"></div>
                <div className="card two"></div>
                <div className="card three"></div>
                <div className="card four"></div>
            </div>
            <div className="deckTwo">
                <div className="text">Правда</div>
                <div className="card one"></div>
                <div className="card two"></div>
                <div className="card three"></div>
                <div className="card four"></div>
            </div>
        </div>

    )

}

export default Deck;