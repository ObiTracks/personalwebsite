import React from 'react'
import './Nav.css'

function Nav() {
    return(
        <div className="nav">
            <h1 id="moihej">Mo Ihej</h1>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/projects'>Projects</a></li>
                <li><a href='/photography'>Photograpy</a></li>
                <li><a href='/experiences'>Experiences</a></li>
                <li><a href='/resume'>Resume</a></li>
                <li><a href='/testimonials'>Testimonials</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
            <p id="contact">Contact</p>
        </div>
    )
}

export default Nav