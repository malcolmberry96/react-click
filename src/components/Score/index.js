import React from "react";
import "./style.css";

function Score(props) {
    return <p className="score">
    Try to remember all twelve sneakers! Click the same sneaker twice and you lose. Try to remember all twelve!
   <br> Score: {props.children} </br>
   </p>;
    
}

export default Score;