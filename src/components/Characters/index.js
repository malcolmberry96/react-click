import React from "react";
import "./style.css";

function Characters(props) {
    return (
        <div className="img-thumbnail">
            <img alt={props.name} src={props.img}  onClick={() =>props.move(props.id)}/>
        </div>
    );
}

export default Characters