import React from 'react';
import logo from './logo.svg';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import './App.css';
import CurrentPositionMarker from './CurrentPositionMarker/CurrentPositionMarker';

require("dotenv").config();

function Map() {
  return (
      <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -36.848461, lng: 174.763336 }} //auckland city co-ordinates
      >
        <CurrentPositionMarker/>
      </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  console.log(process.env.REACT_APP_GOOGLE_KEY);
  return (
    <div className="App">
      <div style={{ width: "100vw", height: "100vh"}}>
        <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }}/>}
        containerElement={<div style={{ height: "100%" }}/>}
        mapElement={<div style={{ height: "100%" }}/>}
        />
      </div>
    </div>
  );
}

export default App;
