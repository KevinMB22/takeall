import React from "react";
import './navigation.scss';
import Logo from '../../assets/TakeAll.svg'

function Navigation(){
    return(
        <nav className="Navigation">
            <figure className="logo">
                <img src={Logo} />                
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