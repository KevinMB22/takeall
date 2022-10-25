import React from "react";
import './navigation.scss';
import Logo from '../../assets/TakeAll.svg';
import Hamburger from '../../assets/hamburger.svg'
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <nav className="Navigation">
            <article class="hamburger">
                <img src={Hamburger} />
            </article>

            <figure className="logo">
                <img src={Logo} />                
            </figure>
            <figure className="bar">
               <Link className="navBtn" to={'/'}><h3>ACCUEIL</h3> </Link>
               <Link className="navBtn" to={'#'}><h3>COMMENT SA MARCHE ?</h3></Link>
                <Link className="navBtn" to={'/aide'}><h3>SITES COMPATIBLES</h3></Link>
                <Link className="navBtn" to={'/aide'}><h3>AIDE</h3></Link>
            </figure>
        </nav>
    )
}

export default Navigation;