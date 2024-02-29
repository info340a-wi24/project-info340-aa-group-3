import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="protest-hub">Protests Hub</div>
        <a href="#" className="hamburger-menu">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </a>
      <div className="nav-links">
        <ul>
          <li><NavLink to="/ProtestPage" title="Home">Home</NavLink></li>
          <li><NavLink to="/AboutPage" title="About Us">About Us</NavLink></li>
          <li><NavLink to="/MapPage" title="Exploration Map">Exploration Map</NavLink></li>
          <li><NavLink to="/FeedbackPage" title="Feedback Form" >Feedback Form</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}