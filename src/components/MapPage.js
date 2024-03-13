"use client"; 

import React from 'react';
import { useState } from 'react'; 
import ProtestData from '../data/protestdata.json'; 
import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import MapSearchBar from './MapSearchBar';

// make sure to npm install this in the project root directory: 
// npm install @vis.gl/react-google-maps

  export default function MapPage(props) {

    // starting point - drumheller fountain
    const position = {lat: 47.65396543841683, lng: -122.3077699312834}; 

    // opens an info window if clicked 
    const [open, setOpen] = useState(null); 

    // handles clicking on the marker
    function markerHandler(protestTitle) {
      setOpen(protestTitle); 
    }

    // handles closing the InfoWindow
    function infoWindowCloseHandler() {
      setOpen(null); 
    }


    // somehow connect the search bar with the location/protest name 
    // the location/protest name will connect with the coordinate
    // the specific coordinate will allow them to see the specific info window
    // or data on the side if possible

    // 1) user types in the search result - this will be connected to the db 
    // 2) the event.target.value of the handle search will be the search term
    // 3) this value will now be the one that we use to show the marker/info
    // 4) pass this to the createMarker
    // 5) Set open is seperate - may need to do this logic outside/in it's own 
    // function 

    return (
        <>
        <h1> Protest Map </h1>
          <div style={{ height: "100vh", width: "90%" }}>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
              <MapSearchBar />
              <Map 
              defaultCenter={position} 
              defaultZoom={5}
              mapId={process.env.REACT_APP_PUBLIC_MAP_ID}>
                {ProtestData.map((protest) => (
                <AdvancedMarker 
                key={protest.title}
                position={{lat: protest.latitude, lng: protest.longitude}} 
                onClick={() => markerHandler(protest.title)}/>
                ))}
                {open && (
                  <InfoWindow 
                  position={{lat: ProtestData.find(protest => protest.title === open).latitude
                  , lng: ProtestData.find(protest => protest.title === open).longitude}} 
                  onCloseClick={infoWindowCloseHandler}>
                  <div> 
                    <h3>{open}</h3>
                    <hr />
                    <h5>{ProtestData.find(protest => protest.title === open).organizer}</h5>
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