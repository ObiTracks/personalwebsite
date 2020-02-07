import React from 'react';
import './ProjectsOld.css';
import pplate from '../../static/passtheplate.jpg';

function Projects(){
    return(
        <div className="projects">
            <div className="proj">
                <div className="int">
                    <img className="snap"/>
                    <div className="tags"></div>
                </div>

                <div className="abt">
                    <h1></h1>
                    <div></div>
                </div>

                <div className="design">
                    <h1></h1>
                    <div className="dscrpt"></div>
                    <div className="pics"></div>
                </div>

                <div className="impct">
                    <div className="dscrpt"></div>
                    <div className="grphic"></div>
                </div>

            </div>
        </div>
        
        // <div className="projects">
        //     <div className="project_card">
        //         <h1 className="proj_title">Pass the Plate</h1> 

        //         <div className="proj_preview">
        //             <img className="proj_img" src={pplate} alt="passtheplate"></img>
        //             {/* <img className="proj_img" href="https://source.unsplash.com/random"></img> */}
        //         </div> 

        //         <div className="techandtags">
        //             <h3 id="technologies">Technologies and Tags</h3>
        //             <div id="tagsbox">
        //                 <div className="tag">CSS</div>
        //                 <div className="tag">HTML</div>
        //                 <div className="tag">Javascript</div>
        //                 <div className="tag">CSS</div>
        //                 <div className="tag">HTML</div>
        //                 <div className="tag">CSS</div>
        //                 <div className="tag">React</div>
        //                 <div className="tag">Angular</div>
        //                 <div className="tag">Jinja2</div>
        //                 <div className="tag">Modern</div>
        //             </div>
        //         </div>

        //         <div className="abt_sction">
        //             <div className="abt">
        //                 <div className="dscrpt">Ipsum lorem dolor</div>
        //                 <div className="glry">Ipsum lorem dolor</div>
        //             </div>
        //         </div>

        //         {/* <iframe src="http://pass-the-plate.appspot.com/" name="myFrame" height="300px" width="500px"></iframe> */}
             
                
        //     </div>

        // </div>
    )
}

export default Projects