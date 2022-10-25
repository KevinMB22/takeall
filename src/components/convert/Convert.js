import React from "react";
import './convert.scss';

function Convert(){
    return(
        <div className="Convert">
            <figure className="titleConvert">
                <h1>Le meilleur convertisseur gratuit dans les formats les plus connus et bien d’autres </h1>
            </figure>
            <figure className="ActualConvert">
                <div className="ActualConvIndice">
                    YOUTUBE
                </div>
            </figure>
            <figure className="SearchConvert">
                <form>
                    <input className="searchField" type='text' required="true" placeholder="Url de la vidéo   Ex : https://youtu.be/rH9u-Ff6-Qw"></input>
                    <button className="submitBtnDown">Télécharger</button>
                </form>
            </figure>
            <figure className="containerSources">
                <figure className="titleSource">
                    <h3>Vous pouvez également convertir une vidéo depuis une autre source </h3>
                </figure>
                <div className="contIndice">
                    <div className="Tiktok Indice">
                        TIKTOK
                    </div>
                    <div className="Twitter Indice">
                        TWITTER
                    </div>
                    <div className="Insta Indice">
                        INSTAGRAM
                    </div>
                </div>
            </figure>
            <figure className="scrollLine">
                <div className="lineVertical lV1"></div>
                <div className="lineVertical lV2"></div>
            </figure>
        </div>

    )
}

export default Convert;