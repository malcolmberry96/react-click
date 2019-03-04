import React from "react";
import "./style.css";

function Score(props) {
    return(
    <div>
        <p className="score"> Score: {props.children}  </p>
         <br> Try to remember all twelve sneakers! Click the same sneaker twice and you lose. Try to remember all twelve!</br>
   </div>
    );
}

export default Score;