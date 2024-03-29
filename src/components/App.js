import React from 'react'; //import React Component
import { Routes, Route, Link } from 'react-router-dom';
import SAMPLE_PROTESTS from '../data/protestdata.json';

import Nav from './Nav';
import AboutPage from './AboutPage';
import MapPage from './MapPage';
import FeedbackPage from './FeedbackPage';
import HomePage from './HomePage';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref } from "firebase/database";
// import { firebaseConfig } from "./Config";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase();

function App(props) {

  return (
    <div>
      <header>
        <div className="w-img">
              <h1><Link style={{textDecoration: 'none', color: `rgb(255, 246, 225)`}} to="home">Protests Hub </Link></h1> 
              <h2 className="slogan">Make your voice heard. Find your people. It all starts with a search.</h2>   
        </div>
        <div>
          <Nav />
        </div>
      </header>

      <main>
        <div>
          <Routes>
              <Route path="home" element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="feedback" element={<FeedbackPage />} />
              <Route path="map" element={<MapPage />} />
              <Route path="*" element={<HomePage />} />
          </Routes>
        </div>   
      </main>

      <footer>
        &copy;Copyright 2024 Protest Hub
      </footer>

    </div>
  );
}

export default App;