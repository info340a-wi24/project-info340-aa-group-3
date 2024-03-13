"use client"; 

import React from 'react';
import { useState } from 'react'; 
import ProtestData from '../data/protestdata.json'; 
import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';

// make sure to npm install this in the project root directory: 
// npm install @vis.gl/react-google-maps

// Search bar

function MapSearchBar({ onSearchedProtest }) {
    
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    const value = event.target.value.toLowerCase(); 
      setSearchTerm(value); 
      onSearchedProtest(value)
  };

  // use the searchterm's coordinate to create a marker

  return (
      <div>
          <input 
          type="text" 
          placeholder="Search for protest locations..." 
          className="search justify-content-center"
          value={searchTerm}
          onChange={handleSearch} />
      </div>
  ); 
}

  export default function MapPage(props) {

    // starting point - drumheller fountain
    const position = {lat: 47.65396543841683, lng: -122.3077699312834}; 

    // opens an info window if clicked 
    const [open, setOpen] = useState(null); 

    // stores the search results
    const [searchResults, setSearchResults] = useState([]);  

    function handleSearch(searchTerm) {
     const filteredData = ProtestData.filter(protest => (
      protest.title.toLowerCase().includes(searchTerm.toLowerCase()))); 
        setSearchResults(filteredData); 
        setOpen(null); 
    };

    // handles clicking on the marker
    function markerHandler(protestTitle) {
      setOpen(protestTitle); 
    }

    // handles closing the InfoWindow
    function infoWindowCloseHandler() {
      setOpen(null); 
    }

    return (
        <>
        <h1> Protest Map </h1>
        <h2> Search for a protest and view its location</h2>
          <div style={{ height: "100vh", width: "90%" }}>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
              <MapSearchBar onSearchedProtest={handleSearch} />
              <Map 
              defaultCenter={position} 
              defaultZoom={5}
              mapId={process.env.REACT_APP_PUBLIC_MAP_ID}>
                {searchResults.map((protest) => ( 
                <AdvancedMarker 
                key={protest.title}
                position={{lat: protest.latitude, lng: protest.longitude}} 
                onClick={() => markerHandler(protest.title)}/>
                ))}
                {open !== null && (
                  <InfoWindow 
                  position={{lat: ProtestData.find(protest => protest.title === open).latitude
                  , lng: ProtestData.find(protest => protest.title === open).longitude}} 
                  onCloseClick={infoWindowCloseHandler}>
                  <div> 
                    <h3>{open}</h3>
                    <hr />
                    <h4>{ProtestData.find(protest => protest.title === open).organizer}</h4>
                    <p>Category: {ProtestData.find(protest => protest.title === open).category}</p>
                    <p>{ProtestData.find(protest => protest.title === open).date}, {ProtestData.find(protest => protest.title === open).time}</p>
                    </div> 
                  </InfoWindow>
                  )}
              </Map>
          </APIProvider>
          </div>
      </>
    ); 
  }