import React from "react";
import './Card.scss';

const Card = ({question = ""}) =>{
    // const cards = {
    //     card1:"Як звали вашого першого домашнього улюбленця?",
    //     card2:"У скільки років ви уперше пішли в школу?",
    //     card3:"Твій найбільший страх?",
    //     card4:"Найбільший сором у житті?",
    //     card5:"Улюблений колір?",
    // }
    // var mas = ['card1', 'card2', 'card3', 'card4', 'card5', ];
    // var randomNum = Math.floor(Math.random() * 5);
    // return(
    //     <div className="Card">
    //         <div>{cards[mas[randomNum]]}</div>
    //     </div>
    // )
    return(
        <div className="Card">
            <div>{question}</div>
        </div>
    )
}

export default Card;