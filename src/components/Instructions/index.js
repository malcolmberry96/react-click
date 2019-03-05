import React from "react";
import "./style.css";

function Instructions(props) {
    return(
        <p className="instructions"> Instructions: {props.children}  </p>
    );
}

export default Instructions;
