import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {

  const [showLinks, setShowLinks] = useState(false);
  function handleNav(event) {
    setShowLinks(!showLinks)
  };

  return (
    <nav className="navbar">
      <div className="protest-hub">Protests Hub</div>
        <a href="#" class="hamburger-menu" onClick= {handleNav}>
          <span className="line"></span>
            <span className="line"></span>
              <span className="line"></span>
        </a>
      <div className={showLinks ? 'nav-links show' : 'nav-links'}>
        <ul>
          <li><NavLink to="home">Home</NavLink></li>
          <li><NavLink to="about">About Us</NavLink></li>
          <li><NavLink to="map">Exploration Map</NavLink></li>
          <li><NavLink to="feedback">Feedback Form</NavLink></li>
        </ul>
      </div>
    </nav> 
  );
}