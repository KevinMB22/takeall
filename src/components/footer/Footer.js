import React from "react";
import './footer.scss'

function Footer(){
    return(
        <div className="Footer">

            <article className="contentFooter">
                <figure className="aproposFooter">
                    <figure className="titleF">
                        <h1>A Propos</h1>
                    </figure>
                    <figure className="contentAproposF">
                        <h3>TakeAll  est un outil qui vous permettra de télécharger des vidéos YouTube, Twitter, Instagram  et d'autres sites.
                            Vous pouvez télécharger une vidéo provenant de la ressource de votre choix et la convertir dans le format de votre choix.
                        </h3>
                    </figure>
                </figure>

                <figure className="siteFooter">
                    <figure className="titleF">
                        <h1> Sites Compatibles</h1>
                    </figure>
                    <figure className="contentSiteF">
                        <h3>Youtube</h3>
                        <h3>TikTok</h3>
                        <h3>Twitter</h3>
                        <h3>Liste des sites compatibles</h3>
                    </figure>
                </figure>


                <figure className="savoirFooter">
                    <figure className="titleF">
                        <h1> En savoir plus</h1>
                    </figure>
                    <figure className="contentSavoirF">
                        <h3>Contact</h3>
                        <h3>Politique de confidentialité</h3>
                        <h3>Mentions Légales</h3>
                        <h3>DMCA</h3>
                    </figure>
                </figure>
            </article>

            <article className="copyrightFooter">
                <h3>Tous droits réservés Takeall</h3>
            </article>


        </div>
    )
}

export default Footer;