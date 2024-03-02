import React from 'react'; //import React Component
import { Routes, Route, Link } from 'react-router-dom';
import SAMPLE_PROTESTS from '../data/protestdata.json';

import Nav from './Nav';
import AboutPage from './AboutPage';
import MapPage from './MapPage';
import FeedbackPage from './FeedbackPage';
import HomePage from './HomePage';

import ProtestList from './ProtestList';
import ProtestDetail from './ProtestDetail';
import ProtestRSVP from './ProtestRSVP';

function App(props) {

  const cards = SAMPLE_PROTESTS;

  return (
    <div>
      <header>
        <div id="w-img">
              <h1><Link style={{textDecoration: 'none', color: `rgb(255, 246, 225)`}} to="home">Protests Hub </Link></h1> 
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
              <Route path="protest-list" >
                <Route index element={<ProtestList cards={cards}/>} />
                <Route path="protest-detail" element={<ProtestDetail />} />
                <Route path="protest-rsvp" element={<ProtestRSVP />} />
              </Route> 
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