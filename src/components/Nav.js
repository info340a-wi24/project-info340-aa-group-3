import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
  return (
    <nav className="navbar">
      <div className="protest-hub">Protests Hub</div>
        <a href="#" class="hamburger-menu">
          <span className="line"></span>
            <span className="line"></span>
              <span className="line"></span>
        </a>
      <div className="nav-links">
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