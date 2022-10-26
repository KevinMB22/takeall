import React from "react";
import './howwork.scss';
import How1 from '../../assets/Capture1.PNG'
import How2 from '../../assets/Capture2.PNG'
import How4 from '../../assets/Capture4.PNG'

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
                <div className="imgStep">
                    <img src={How1}/>
                </div>
            </figure>
            <figure className="step right">
                <div className="titleStep">
                    <figure className="circleStep "><h4>2</h4></figure>
                    <h2>SAISISSEZ L’URL DE LA VIDEO </h2>
                </div>
                <div className="imgStep">
                <img src={How2}/>
                </div>
            </figure>
            <figure className="step">
                <div className="titleStep">
                    <figure className="circleStep"><h4>3</h4></figure>
                    <h2>CHOISISSEZ LE FORMAT DE SORTIE</h2>
                </div>
                <div className="imgStep"></div>
            </figure>
            <figure className="step right">
                <div className="titleStep">
                    <figure className="circleStep"><h4>4</h4></figure>
                    <h2>APPUYEZ SUR TELECHARGER</h2>
                </div>
                <div className="imgStep">
                    <img src={How4}/>
                </div>
            </figure>
        </figure>
    </div>
    )
}

export default HowWork;