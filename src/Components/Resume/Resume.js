import React from 'react';
import './Resume.css';
import resume from '../../static/resume.JPG';
import { moihejresume } from '../../static/moihejresume.pdf';

function doc(){}
function Resume(){
    return(
        <div className="resumepage">
            <img className='resume' src={resume}/>
        </div>
    )
}

export default Resume