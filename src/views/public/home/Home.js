import React from "react";
import './home.scss';

function Home(){
    return(
        <div className="Home">
            <div className="Convert">
                <figure className="titleConvert">
                    <h2>Le meilleur convertisseur gratuit dans les formats les plus connus et bien d’autres </h2>
                </figure>
                <figure className="ActualConvert">
                    <div className="ActualConvIndice">
                        YOUTUBE
                    </div>
                </figure>
                <figure className="SearchConvert">
                    <form>
                        <input className="searchField" type='text' required="true" placeholder="Url de la vidéo   Ex : https://youtu.be/rH9u-Ff6-Qw"></input>
                        <div>
                            <input type='radio' value='MP3'></input>
                            <input type='radio' value='MP4'></input>
                            <input type='radio' value='3GP'></input>
                            <input type='radio' value='AVI'></input>
                        </div>
                    </form>
                </figure>
            </div>
        </div>
    )
}


export default Home;