import React from 'react';
import './Projects.css';
import pplate from '../../static/passtheplate.jpg';
import ptp from '../../static/passtheplate.jpg';

function Projects(){
    return(
        <div className="projects">
            <div className="proj">
                <div className="int">
                    {/* <h1 className="num">01</h1>
                    <h1> Pass the Plate</h1> */}
                    <div className="snap">
                        <img src={ ptp }/>
                    </div>

                    <div className="tagsbox">
                        <h1 className="title">Technologies and Tags</h1>
                        <div className="tags">
                            <div className="tag">CSS</div>
                            <div className="tag">HTML5</div>
                            <div className="tag">Javascript</div>
                            <div className="tag">CSS</div>
                            <div className="tag">Angular</div>
                            <div className="tag">SQL</div>
                            <div className="tag">Jinja2</div>
                        </div>
                    </div>

                </div>

                <div className="abt">

                    <h1>What is Pass the Plate?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce eget tincidunt magna. Curabitur aliquam lectus 
                        ac nulla viverra, vitae condimentum augue tincidunt. 
                        Aliquam maximus egestas massa, ac gravida nibh facilisis eu. 
                        Ut sodales, augue vel tristique placerat, sem lacus aliquam 
                        nulla, a euismod ipsum felis quis libero. Maecenas arcu ipsum, 
                        feugiat nec velit ut, facilisis faucibus augue. Maecenas 
                        mauris ex, porttitor at felis id, volutpat vehicula justo. 
                        Donec quis lorem vu</p>

                </div>

                <div className="design">

                    <h1>Walk through the design process...</h1>
                    
                    <p className='dscrpt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce eget tincidunt magna. Curabitur aliquam lectus 
                        ac nulla viverra, vitae condimentum augue tincidunt. 
                        Aliquam maximus egestas massa, ac gravida nibh facilisis eu. 
                        Ut sodales, augue vel tristique placerat, sem lacus aliquam 
                        nulla,</p>

                    <div className="pics">
                        <div className="img"></div>                            
                    </div>
                    
                </div>

                <div className="impct">
                    <h1>It's Impact and Future...</h1>
                    <div className="cnt">
                        <div className="grphic"></div>
                        <p className='dscrpt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce eget tincidunt magna. Curabitur aliquam lectus 
                        ac nulla viverra, vitae condimentum augue tincidunt. 
                        Aliquam maximus egestas massa, ac gravida nibh facilisis eu. 
                        Ut sodales, augue</p>
                    </div>
                </div>

            </div>
        </div>
        //

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