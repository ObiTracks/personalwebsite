import React from 'react'
import { useState, useEffect } from 'react';
import './RedditPosts.css';
import RedditCard from '../RedditCard/RedditCard';


function RedditPosts() {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        const url = 'http://api.pushshift.io/reddit/search/submission/?author=obiihej'
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data.data)
        })
    }

    return (
        <div className="ctnt_feed">
            <div className="sctn_intro">
                <h1 className="myRedditPosts">My Reddit Posts</h1>
                <p className="description">This is a feed from my reddit account of things
                I am interested in or am interested in sharing. Feel free to check out my posts
                and my reddit page! </p>
            </div>
            
            <div className="cards">
                {data.map(item => {
                    return <RedditCard title={item.title} author={item.author} post_content={item.selftext} timestamp={item.created_utc}
                    full_link={item.full_link} img="https://source.unsplash.com/random" />
                })}
            </div>
        </div>
    )
}

export default RedditPosts