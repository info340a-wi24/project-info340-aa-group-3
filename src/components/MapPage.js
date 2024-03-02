"use client"; 

import React from 'react';
import { useState } from 'react'; 
import {APIProvider, Map, AdvancedMarker, InfoWindow} from '@vis.gl/react-google-maps';
// make sure to npm install this in the project root directory
// npm install @vis.gl/react-google-maps

  export default function MapPage(props) {
    // hands off rafah protest
    const coord1 = {lat: 47.619298853329724, lng: -122.34093600187532}; 

    // end vegan milk surcharge protest 
    const coord2 = {lat: 47.61532143431974, lng: -122.33819474770648}; 

    // protest jimmy johns and inspire brands 
    const coord3 = {lat: 47.70849543469973, lng: -122.32231101858588}; 

    // starting point - drumheller fountain
    const position = {lat: 47.65396543841683, lng: -122.3077699312834}

    const [open, setOpen] = useState(false); 

    // clicking works but maybe not on multiple things?
    // try to make a function that takes in a coord & only opens based on that

    return (
        <>
        <h1> Map </h1>
          <div style={{ height: "100vh", width: "100%" }}>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
              <Map 
              defaultCenter={position} 
              defaultZoom={11}
              mapId={process.env.REACT_APP_PUBLIC_MAP_ID}>
              <AdvancedMarker position={coord1} onClick={() => setOpen(true)}/>
              {open && (
                <InfoWindow position={coord1} onCloseClick={() => setOpen(false)}>
                  <h3>Hands Off Rafah - Ceasefire Now</h3>
                  <hr />
                  <h5>Palestinian Youth Movement</h5>
                </InfoWindow>
                )}
              <AdvancedMarker position={coord2} onClick={() => setOpen(true)}/>
              {open && (
                <InfoWindow position={coord2} onCloseClick={() => setOpen(false)}>
                  <h2>please work</h2>
                </InfoWindow>
                )}
              <AdvancedMarker position={coord3} onClick={() => setOpen(true)}/>
              {open && (
                <InfoWindow position={coord3} onCloseClick={() => setOpen(false)}>
                  <h2>please work</h2>
                </InfoWindow>
                )}
              </Map>
          </APIProvider>
          </div>
      </>
    )

        // return (
    //     <>
    //     <p>testing</p>
    //     <img src="images/pcc-map.png" alt="Google Map view of Edmonds, WA."/>
    //     </>
    // )

  }