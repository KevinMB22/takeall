import React from "react";
import './convert.scss';
import { motion } from 'framer-motion';

function Convert(){
    return(
        <div className="Convert">
            <figure className="titleConvert">
                <motion.h1 initial={{opacity:0, y:5}} animate={{opacity:1, y:0}} transition={{delay:1.6}}>Le meilleur convertisseur gratuit dans les formats les plus connus et bien d’autres </motion.h1>
            </figure>
            <figure className="ActualConvert">
                <motion.div initial={{opacity:0}} animate={{opacity:1 }} transition={{delay:3.5}} className="ActualConvIndice">
                    YOUTUBE
                </motion.div>
            </figure>
            <figure className="SearchConvert">
                <form>
                    <motion.input initial={{opacity:0, y:-6}} animate={{opacity:1, y:0}} transition={{delay:1.9}} className="searchField" type='text' required="true" placeholder="Url de la vidéo   Ex : https://youtu.be/rH9u-Ff6-Qw"></motion.input>
                    <a></a>
                    <motion.button initial={{opacity:0, marginLeft:16}} animate={{opacity:1, marginLeft:0}} transition={{delay:2.1}} className="submitBtnDown">Télécharger</motion.button>
                </form>
            </figure>
            <figure className="containerSources">
                <figure className="titleSource">
                    <motion.h3 initial={{opacity:0}} animate={{opacity:1, y:0}} transition={{delay:2.4}}>Vous pouvez également convertir une vidéo depuis une autre source </motion.h3>
                </figure>
                <div className="contIndice">
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.6}} className="Tiktok Indice">
                        TIKTOK
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1, y:0}} transition={{delay:2.8}} className="Twitter Indice">
                        TWITTER
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1, y:0}} transition={{delay:3}} className="Insta Indice">
                        INSTAGRAM
                    </motion.div>
                </div>
            </figure>
            <figure className="scrollLine">
                <motion.div initial={{opacity:0, x: 15}} animate={{opacity:1, rotate:180, x:9}} transition={{delay:3.3}} className="lineVertical lV1"></motion.div>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3.2}} className="lineVertical lV2"></motion.div>
            </figure>
        </div>

    )
}

export default Convert;