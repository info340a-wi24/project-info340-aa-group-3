import React from 'react'; //import React Component
import { Routes, Route, Navigate, Link } from 'react-router-dom';

import Nav from './Nav';
import AboutPage from './AboutPage';
import MapPage from './MapPage';
import FeedbackPage from './FeedbackPage';

import ProtestPage from './ProtestPage';
import ProtestList from './ProtestList';
import ProtestDetail from './ProtestDetail';
import ProtestRSVP from './ProtestRSVP';


function App(props) {

  return (
    <div>
      <header>
        <div id="w-img">
          <h1>Protests Hub</h1> 
          <h2 id="slogan">Make your voice heard. Find your people. It all starts with a search.</h2>   
        </div>
      </header>
    
      <main>
        <div className="navbar">
          <div className="protest-hub">
            <Nav />
          </div>
          <div>
            <Routes>
              <Route path="/ProtestPage" element={<ProtestPage />} >
                <Route index element={<ProtestList />} />
              </Route>
              <Route path="/AboutPage" element={<AboutPage />} />
              <Route path="/MapPage" element={<MapPage />} />
              <Route path="/FeedbackPage" element={<FeedbackPage />} />
              <Route path="*" element={<Navigate to="/ProtestPage" />} />
            </Routes>
          </div>
        </div>
      </main>

      <footer>
        &copy;Copyright 2024 Protests Hub
      </footer>
    </div>
  );
}

export default App;