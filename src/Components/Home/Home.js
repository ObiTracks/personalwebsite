import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Home.css';
import Nav from '..//Nav/Nav';
import Intro from './Intro/Intro';
import RedditPosts from './RedditFeed/RedditPosts/RedditPosts';
import Skills from './Skills/Skills';

function Home() {
  return (
      <div className="home">
        <Intro />
        <RedditPosts />
        <Skills />
      </div>
  );
}

export default Home;