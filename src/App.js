import React from 'react';
import logo from './logo.svg';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, } from "react-google-maps";
import './App.css';


require("dotenv").config();

function Map() {
  return (
      <GoogleMap
      onClick = {(event) =>{
        console.log(event);
      }}
        defaultZoom={10}
        defaultCenter={{ lat: -36.848461, lng: 174.763336 }} //auckland city co-ordinates
       
      >
      
      <Marker  
      position={{lat:-36,lng:174}}/>)
      </GoogleMap>
     
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div>
    <div style={{ width: "100vw", height: "50vh"}}>
      <WrappedMap 
      googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCWKV_oO0Jo8ih5KMrT4H0Eyvf4cPBNVIU"}
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
