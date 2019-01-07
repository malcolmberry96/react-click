import React from "react";
import "../styles/Navbar.css"

const styles = {
    navbarStyle: {
        background: "green",
        justifyContent: "flex-end"
    }
}

function Navbar() {
    return (
        <nav styles={styles.navbarStyle} className ="navbar"> 
        <a href="/">Clicky Game</a>
        </nav>
    )
}

export default Navbar;