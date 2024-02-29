import React from 'react'; //import React Component
import { Routes, Route, Navigate, Link } from 'react-router-dom';

import Nav from './Nav';
import AboutPage from './AboutPage';
import MapPage from './MapPage';
import FeedbackPage from './FeedbackPage';
import HomePage from './HomePage';

import ProtestPage from './ProtestPage';
import ProtestList from './ProtestList';
import ProtestDetail from './ProtestDetail';
import ProtestRSVP from './ProtestRSVP';

import Picture from './Picture';
import Interview from './Interview';

function App(props) {

  return (
    <div>
      <header>
        <div id="w-img">
              <h1><Link to="home">Protests Hub </Link></h1> 
              <h2 id="slogan">Make your voice heard. Find your people. It all starts with a search.</h2>   
        </div>
        <div>
          <Nav />
        </div>
        <div>
        <Routes>
            {/* <Route path="home" element={<HomePage />} /> */}
            <Route path="about" element={<AboutPage />} />
            <Route path="feedback" element={<FeedbackPage />} />
            {/* <Route path="map" element={<MapPage />} /> */}
            <Route path="*" element={<Navigate to="home"/>}/>
        </Routes>
        </div>   
      </header>

      <main>
      </main>

      <footer>
        &copy;Copyright 2024 Protest Hub
      </footer>

    </div>
  );
}

export default App;