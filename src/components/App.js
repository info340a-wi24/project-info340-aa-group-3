import React from 'react'; //import React Component
import { Routes, Route, Navigate, Link } from 'react-router-dom';

import Nav from './Nav';
import AboutPage from './AboutPage';
import MapPage from './MapPage';
import FeedbackPage from './FeedbackPage';
import HomePage from './HomePage';

import ProtestList from './ProtestList';
import ProtestDetail from './ProtestDetail';
import ProtestRSVP from './ProtestRSVP';

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
      </header>

      <main>
        <div>
          <Routes>
              <Route path="home" element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="feedback" element={<FeedbackPage />} />
              <Route path="map" element={<MapPage />} />
              <Route path="protest-list" element={<ProtestList />} />
              <Route path="*" element={<Navigate to="home"/>}/>
              <Route path="protest-detail" element={<ProtestDetail />} />
              <Route path="protest-rsvp" element={<ProtestRSVP />} />
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