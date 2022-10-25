import React from "react";
import './howwork.scss';

function HowWork(){
    return(
        <div className="HowWork">
        <figure className="titleHowWork">
            <h1>COMMENT SA MARCHE ?</h1>
        </figure>
        <figure className="contentHowWork">
            <figure className="step">
                <div className="titleStep">
                    <figure className="circleStep"><h4>1</h4></figure>
                    <h2>CHOISISSEZ LA RESSOURCE QUI VOUS CONVIENT </h2>
                </div>
                <div className="imgStep"></div>
            </figure>
            <figure className="step right">
                <div className="titleStep">
                    <figure className="circleStep "><h4>1</h4></figure>
                    <h2>SAISISSEZ L’URL DE LA VIDEO </h2>
                </div>
                <div className="imgStep"></div>
            </figure>
            <figure className="step">
                <div className="titleStep">
                    <figure className="circleStep"><h4>1</h4></figure>
                    <h2>CHOISISSEZ LE FORMAT DE SORTIE</h2>
                </div>
                <div className="imgStep"></div>
            </figure>
            <figure className="step right">
                <div className="titleStep">
                    <figure className="circleStep"><h4>1</h4></figure>
                    <h2>APPUYEZ SUR TELECHARGER</h2>
                </div>
                <div className="imgStep"></div>
            </figure>
        </figure>
    </div>
    )
}

export default HowWork;