"use client"; 

import React from 'react';
import { useState, useEffect } from 'react'; 
import ProtestData from '../data/protestdata.json'; 
import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from "./Config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

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
          <h2 className= "searchCaption">Search by protest name!</h2>
          <input 
          type="text" 
          placeholder="Search for protest name..." 
          className="search justify-content-center"
          value={searchTerm}
          onChange={handleSearch} />
      </div>
  ); 
}

  export default function MapPage(props) {

    const [cards, setCards] = useState([]);

    useEffect(() => {
      const cardsRef = ref(database, 'Protests');
        onValue(cardsRef, (snapshot) => {
            const cards = snapshot.val();
            if (cards) {
              setCards(Object.values(cards));
            }
          });
        }, []);


    // starting point - drumheller fountain
    const position = {lat: 47.65396543841683, lng: -122.3077699312834}; 

    // opens an info window if clicked 
    const [open, setOpen] = useState(null); 

    // stores the search results
    const [searchResults, setSearchResults] = useState([]);  

    function handleSearch(searchTerm) {
     const filteredData = cards.filter(protest => (
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
          <div style={{ height: "50vh", width: "100%" }}>
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
                  position={{lat: cards.find(protest => protest.title === open).latitude
                  , lng: cards.find(protest => protest.title === open).longitude}} 
                  onCloseClick={infoWindowCloseHandler}>
                  <div> 
                    <h3>{open}</h3>
                    <hr />
                    <h4>{cards.find(protest => protest.title === open).organizer}</h4>
                    <p>Category: {cards.find(protest => protest.title === open).category}</p>
                    <p>{cards.find(protest => protest.title === open).date}, {cards.find(protest => protest.title === open).time}</p>
                    </div> 
                  </InfoWindow>
                  )}
              </Map>
            </APIProvider>
          </div>
    ); 
  }