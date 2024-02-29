import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav class="navbar">
      <div class="protest-hub">Protests Hub</div>
        <a href="#" class="hamburger-menu">
          <span class="line"></span>
            <span class="line"></span>
              <span class="line"></span>
        </a>
      <div class="nav-links">
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