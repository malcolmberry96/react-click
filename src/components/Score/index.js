import React from "react";
import "./style.css";

function Score(props) {
    return(
    <div>
        <p className="score"> Score: {props.children}  </p>
         <p> Try to remember all twelve sneakers! Click the same sneaker twice and you lose. Try to remember all twelve!</p>
   </div>
    );
}

export default Score;