import React from'react';
import './Intro.css';
import mexico_snipe from '../../../static/mexico_snipe.jpg';


function Intro() {
    return(
        <div className="overlay">

            <div className="overlay_wash"></div>
            <div className="mn_body">
                <img className="mypic" src={mexico_snipe} alt="obi"></img>
                <h3 className="intr_sbttl">Hello I'm</h3>
                <h1 className="main_ttl">Moshe Obi Ihej</h1>
                <p className="abt_me">I am a freshman business administration 
                and computer science student based out of Waterloo, Ontario. 
                I am very passionate about computing technologies - at the 
                moment, I am particularly interested in web development. 
                I thrive on learning new frameworks, concepts, problem 
                solving methods and collaborating with others to work 
                on business and programming ventures.</p>
            </div>

        </div>
    )
}

export default Intro