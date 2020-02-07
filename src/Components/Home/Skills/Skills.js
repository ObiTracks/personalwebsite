import React from 'react';
import './Skills.css';

function Skills(){
    return(
        
        <div className="box">
            <div className="title">Some Skills and Achievements</div>
            <div className="skills_container">
                <div className="skills">
                    <div className="items">
                        <p className="lng">Python</p>
                        <div className="progressbar" id="python"><div className="progress"></div></div>
                    </div>
                    <div className="items">
                        <p className="lng">HTML</p>
                        <div className="progressbar" id="html"><div className="progress"></div></div>
                    </div>
                    <div className="items">
                        <p className="lng">CSS</p>
                        <div className="progressbar" id="css"><div className="progress"></div></div>
                    </div>
                    <div className="items">
                        <p className="lng">React</p>
                        <div className="progressbar" id="react"><div className="progress"></div></div>
                    </div>
                    <div className="items">
                        <p className="lng">Javascript</p>
                        <div className="progressbar" id="js"><div className="progress"></div></div>
                    </div>
                </div>

                <div className="achievements">
                    <img className="pic"/>
                </div>
            </div>
        </div>
    )
}

export default Skills