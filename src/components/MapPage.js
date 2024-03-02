"use client"; 

import React from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
// make sure to npm install this in the project root directory
// npm install @vis.gl/react-google-maps
// open/code .env.local
// paste this into .env.local REACT_APP_GOOGLE_MAP_API_KEY=AIzaSyCIUjbP49KH5M3KJ40_gYkVKqxqQCVDHps

// export default function MapPage(props) {

  export default function MapPage() {
    const position = {lat: 47.79172321733598, lng: -122.36609425962166}; 

    return (
        <>
        <h1> Map </h1>
          <div style={{ height: "100vh", width: "100%" }}>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
              <Map defaultCenter={position} defaultZoom={10}>
                <Marker position={position} />
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