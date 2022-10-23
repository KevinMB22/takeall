import React from "react";
import './navigation.scss';

function Navigation(){
    return(
        <nav className="Navigation">
            <figure className="logo">
                <h1>TAKEALL</h1>
            </figure>
            <figure className="bar">
                <h3>ACCUEIL</h3>
                <h3>COMMENT SA MARCHE ?</h3>
                <h3>SITES COMPATIBLES</h3>
                <h3>AIDE</h3>
            </figure>
        </nav>
    )
}

export default Navigation;