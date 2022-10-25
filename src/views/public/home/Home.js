import React from "react";
import Convert from "../../../components/convert/Convert";
import HowWork from "../../../components/howwork/HowWork";
import AdvantageTake from "../../../components/advantagetake/AdvantageTake";

import './home.scss';

function Home(){
    return(
        <div className="Home">

            <Convert/>
            <HowWork/>
            <AdvantageTake/>
       
          

        </div>
    )
}


export default Home;