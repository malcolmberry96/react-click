import React from "react";
import "./style.css";

function Score(props) {
    return <p className="score">
    Classic Memory Game: Click the same sneaker twice you loose. Try to remember all twelve sneakers
    Score: {props.children}</p>;
    
}

export default Score;