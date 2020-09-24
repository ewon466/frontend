import React from 'react';
import logo from './logo.svg';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, DirectionsService, DirectionsRenderer } from "react-google-maps";
import './App.css';
import DestinationMarkers from './DestinationMarkers/DestinationMarkers';
import CurrentPositionMarker from './CurrentPositionMarker/CurrentPositionMarker';
import Directions from './Directions/Directions';
import MapStyle from './mapStyle';
import EllisCreekFarmLogo from './elliscreekfarmlogo.png';
import { render } from '@testing-library/react';

require("dotenv").config();

function Map() {
  var directionsService = new window.google.maps.DirectionsService();
  var directionsDisplay = new window.google.maps.DirectionsRenderer();
  
  var response = calculateAndDisplayRoute(directionsService,directionsDisplay,'-36.756850, 174.712830','-36.755080, 174.719890');
  //directionsDisplay.setMap(WrappedMap);
 
  return (
    <div>
      <img src={EllisCreekFarmLogo} alt="Ellis Creek Farm Logo" class="MapLogo"></img>
      <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -36.848461, lng: 174.763336 }} //auckland city co-ordinates
      options={{styles: MapStyle, disableDefaultUI: true, zoomControl: true}}
      >
        <DestinationMarkers lat={-36.756850} lng={174.712830} />
        <DestinationMarkers lat={-36.755080} lng={174.719890} />
        <DestinationMarkers lat={-36.755960} lng={174.725150} />
        <CurrentPositionMarker/>
       
        <DirectionsRenderer directions={response}/> 
   
       
      </GoogleMap>
    </div>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function calculateAndDisplayRoute(directionsService,directionsDisplay,from,to) {
  
  directionsService.route({
    origin: from,
    destination: to,
    travelMode: 'DRIVING',
  }, function(response,status){
    if(status == 'OK'){
      console.log(response);
      directionsDisplay.setDirections(response);
      return response;
    } else {
      window.alert('request failed: ' + status);
    }
  });
}

function App() {
  console.log(process.env.REACT_APP_GOOGLE_KEY);
  return (
    <div className="App">
      <div style={{ width: "100vw", height: "100vh"}}>
        <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCWKV_oO0Jo8ih5KMrT4H0Eyvf4cPBNVIU`}
        loadingElement={<div style={{ height: "100%" }}/>}
        containerElement={<div style={{ height: "100%" }}/>}
        mapElement={<div style={{ height: "100%" }}/>}
        />
      </div>
    </div>
  );
}

export default App;
