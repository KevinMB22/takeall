import React from "react";
import './navigation.scss';
import Logo from '../../assets/TakeAll.svg';
import Hamburger from '../../assets/hamburger.svg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navigation(){
    return(
        <nav className="Navigation">
            <article class="hamburger">
                <img src={Hamburger} />
            </article>

            <figure className="logo">
            <Link className="navLogo" to={'/'}><motion.h1 initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} transition={{delay:0.5}}>TAKEALL</motion.h1></Link>            
            </figure>
            <figure className="bar">
               <Link className="navBtn" to={'/'}><motion.h3 initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{delay: 0.7}}>ACCUEIL</motion.h3></Link>
               <Link className="navBtn" to={'#'}><motion.h3 initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{delay: 0.9}} >COMMENT SA MARCHE ?</motion.h3></Link>
                <Link className="navBtn" to={'/aide'}><motion.h3 initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{delay: 1.1}}>SITES COMPATIBLES</motion.h3></Link>
                <Link className="navBtn" to={'/aide'}><motion.h3 initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{delay: 1.3}}>AIDE</motion.h3></Link>
            </figure>
        </nav>
    )
}

export default Navigation;