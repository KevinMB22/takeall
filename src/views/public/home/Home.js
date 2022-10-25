import React from "react";
import icon1 from '../../../assets/icon1.svg'
import './home.scss';

function Home(){
    return(
        <div className="Home">
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
            </div>

            <div className="HowWork">
                <figure className="titleHowWork">
                    <h1>COMMENT SA MARCHE ?</h1>
                </figure>
                <figure className="contentHowWork">
                    <figure className="step">
                        <div className="titleStep">
                            <figure className="circleStep">1</figure>
                            <h2>CHOISISSEZ LA RESSOURCE QUI VOUS CONVIENT </h2>
                        </div>
                        <div className="imgStep"></div>
                    </figure>
                    <figure className="step right">
                        <div className="titleStep">
                            <figure className="circleStep ">2</figure>
                            <h2>SAISISSEZ L’URL DE LA VIDEO </h2>
                        </div>
                        <div className="imgStep"></div>
                    </figure>
                    <figure className="step">
                        <div className="titleStep">
                            <figure className="circleStep">3</figure>
                            <h2>CHOISISSEZ LE FORMAT DE SORTIE</h2>
                        </div>
                        <div className="imgStep"></div>
                    </figure>
                    <figure className="step right">
                        <div className="titleStep">
                            <figure className="circleStep">4</figure>
                            <h2>APPUYEZ SUR TELECHARGER</h2>
                        </div>
                        <div className="imgStep"></div>
                    </figure>
                </figure>
            </div>

            <div className="AdvantageTake">
                <div className="contaierItemAd">
                    <article className="itemAd">
                        <figure className="titleItemAd">
                            <img src={icon1}/>
                            <h4>CONVERTISSEUR YOUTUBE</h4>
                        </figure>
                        <figure className="dataItemAd">
                            <p>Convertisseur YouTube mp3 en 2 clics ! Gratuitement dans le format que vous avez choisi MP3, MP4 et bien d'autres!</p>
                        </figure>
                    </article>
                    <article className="itemAd">
                        <figure className="titleItemAd">
                            <img src={icon1}/>
                            <h4>CONVERTISSEUR YOUTUBE</h4>
                        </figure>
                        <figure className="dataItemAd">
                            <p>Convertisseur YouTube mp3 en 2 clics ! Gratuitement dans le format que vous avez choisi MP3, MP4 et bien d'autres!</p>
                        </figure>
                    </article>
                    <article className="itemAd">
                        <figure className="titleItemAd">
                            <img src={icon1}/>
                            <h4>CONVERTISSEUR YOUTUBE</h4>
                        </figure>
                        <figure className="dataItemAd">
                            <p>Convertisseur YouTube mp3 en 2 clics ! Gratuitement dans le format que vous avez choisi MP3, MP4 et bien d'autres!</p>
                        </figure>
                    </article>
                    <article className="itemAd">
                        <figure className="titleItemAd">
                            <img src={icon1}/>
                            <h4>CONVERTISSEUR YOUTUBE</h4>
                        </figure>
                        <figure className="dataItemAd">
                            <p>Convertisseur YouTube mp3 en 2 clics ! Gratuitement dans le format que vous avez choisi MP3, MP4 et bien d'autres!</p>
                        </figure>
                    </article>
                    <article className="itemAd">
                        <figure className="titleItemAd">
                            <img src={icon1}/>
                            <h4>CONVERTISSEUR YOUTUBE</h4>
                        </figure>
                        <figure className="dataItemAd">
                            <p>Convertisseur YouTube mp3 en 2 clics ! Gratuitement dans le format que vous avez choisi MP3, MP4 et bien d'autres!</p>
                        </figure>
                    </article>
                    <article className="itemAd">
                        <figure className="titleItemAd">
                            <img src={icon1}/>
                            <h4>CONVERTISSEUR YOUTUBE</h4>
                        </figure>
                        <figure className="dataItemAd">
                            <p>Convertisseur YouTube mp3 en 2 clics ! Gratuitement dans le format que vous avez choisi MP3, MP4 et bien d'autres!</p>
                        </figure>
                    </article>
                </div>     
            </div>
        </div>
    )
}


export default Home;