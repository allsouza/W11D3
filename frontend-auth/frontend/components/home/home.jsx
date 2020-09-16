import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <Link to="/chirps"><div className="home">
    <div className="hero-img-frame">
      <img className="hero-img" src="https://pmcvariety.files.wordpress.com/2017/02/angry-birds-blues-rovio.jpg?w=1000&h=750&crop=1" />
    </div> 
    <h1>Where birds can chirp.</h1>
  </div></Link>
)
