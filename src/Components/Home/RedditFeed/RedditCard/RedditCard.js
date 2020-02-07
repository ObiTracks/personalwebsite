import React from "react";
import mexico_snipe from '../../../../static/mexico_snipe.jpg';
import './RedditCard.css';

// const card =

function RedditCard(props) {
    return(
        <div className="card">

            <div className="container_1">
                <img className="filler_img" src={props.img} alt="randomimg"/>
                <h1 className="postTitle">{props.title}</h1>
                <p className="postContent">{props.post_content}</p>
            </div>

            <div className="container_2">
                <img className="auth_pic" src={mexico_snipe} alt="obi"></img>
                <div className="info">
                    <h1 className="createdBy">Created by</h1>
                    <h1 className="author">{props.author}</h1>
                    {/* <h4 className="timestamp">Date: {props.timestamp}</h4> */}
                </div>
            </div>

            <a className="full_link" href="{props.full_link}">CONTINUE READING ></a>
            
        </div>

    );
}

export default RedditCard;