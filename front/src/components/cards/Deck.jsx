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
    0: "Як звали вашого першого домашнього улюбленця?",
    1:"У скільки років ви уперше пішли в школу?",
    2:"Твій найбільший страх?",
    3:"Найбільший сором у житті?",
    4:"Улюблений колір?",
}

const COLORS = {
    truth: "#e7feee",
    action: "#fee7e7",
    empty: "#f0f0f5"
}

const Deck = () =>{

    const [isAnimatingAction, setIsAnimatingAction] = useState(false);
    const [isAnimatingTruth, setIsAnimatingTruth] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState("");
    const [activeColor, setActiveColor] = useState(COLORS["empty"]);

    const handleClickAction = () => {

        let question = getRandomQuestion(ACTION_QUESTIONS) 
        setTimeout(() => {
            setActiveQuestion(question);
            setActiveColor(COLORS['action']);
        }, 2400);
        setIsAnimatingAction(false);
        setTimeout(() => setIsAnimatingAction(true), 0);

    };

    const handleClickTruth = () => {
        
        let question = getRandomQuestion(TRUTH_QUESTIONS) 
        setTimeout(() => {
            setActiveColor(COLORS['truth']); 
            setActiveQuestion(question)
        }, 2400);
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
        <Card color={activeColor} question={activeQuestion}/>
        </>
      

    )

}

export default Deck;