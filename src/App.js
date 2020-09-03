import React from 'react';
import logo from './logo.svg';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import './App.css';

require("dotenv").config();

function Map() {
  return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -36.848461, lng: 174.763336 }} //auckland city co-ordinates
      />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  console.log(process.env.REACT_APP_GOOGLE_KEY);
  return (
    <div>
    <div style={{ width: "100vw", height: "50vh"}}>
      <WrappedMap 
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
      loadingElement={<div style={{ height: "100%" }}/>}
      containerElement={<div style={{ height: "100%" }}/>}
      mapElement={<div style={{ height: "100%" }}/>}
      ></WrappedMap>
    </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;
