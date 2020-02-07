import React from 'react';
import './About.css';

function About(){
    return(
        <div className="about">


            <div className="int">
                <div className="picture"></div>
                <div className="dscrpt">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
            <div className="stats">
                <div className="stat"></div>
                <div className="stat"></div>
                <div className="stat"></div>
                <div className="stat"></div>
            </div>

            <div className="abt_sctn">
                {/* <div className="abt_me"></div> */}
                <div className="box"></div>
                <div className="box"></div>
            </div>

            <div className="passions">
                <div className="categories">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="ig_posts">
                <div className=""></div>
            </div>


        </div>
    )
}

export default About