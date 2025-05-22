import React, { useState } from "react";
import "./Deck.scss";
import TruthCard from "./animated-cards/TruthCard";
import ActionCard from "./animated-cards/ActionCard";
import Card from "./Card";

const ACTION_QUESTIONS = {
    0: "QUEST 1",
    1: "QUEST 2",
    2: "QUEST 3",
    3: "QUEST 4",
    4: "QUEST 5",
    5: "QUEST 6",
    6: "QUEST 7",
}

const TRUTH_QUESTIONS = {
    0: "QUEST weifjiw 1",
    1: "QUEST eifwji 2",
    2: "QUEST ifweji 3",
}

const Deck = () =>{

    const [isAnimatingAction, setIsAnimatingAction] = useState(false);
    const [isAnimatingTruth, setIsAnimatingTruth] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState("");

    const handleClickAction = () => {

        let question = getRandomQuestion(ACTION_QUESTIONS) 
        
        setTimeout(() => setActiveQuestion(question), 2200);
        setIsAnimatingAction(false);
        setTimeout(() => setIsAnimatingAction(true), 0);

    };

    const handleClickTruth = () => {
        
        let question = getRandomQuestion(TRUTH_QUESTIONS) 
        
        setTimeout(() => setActiveQuestion(question), 2200);
        setIsAnimatingTruth(false);
        setTimeout(() => setIsAnimatingTruth(true), 0);
    };

    const getRandomQuestion = (questions) => {
        let randomNamber = Math.floor(Math.random() * Object.keys(questions).length);

        return questions[randomNamber];
    }

    return(
        <>
        <ActionCard isAnimating={isAnimatingAction}/>
        <div className="decks">
            <div className="deckOne" onClick={handleClickAction}>
                <div>Дія</div>
                <div className="card one"></div>
                <div className="card two"></div>
                <div className="card three"></div>
                <div className="card four"></div>    
                
            </div>
            <div className="deckTwo" onClick={handleClickTruth}>
                <div className="text">Правда</div>
                <div className="card one"></div>
                <div className="card two"></div>
                <div className="card three"></div>
                <div className="card four"></div>
                
            </div>
        </div>
        <TruthCard isAnimating={isAnimatingTruth}/>
        <Card question={activeQuestion}/>
        </>
      

    )

}

export default Deck;