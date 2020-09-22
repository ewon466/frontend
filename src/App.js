import React from "react";
// eslint-disable-next-line
import logo from "./logo.svg";
// eslint-disable-next-line
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  // eslint-disable-next-line
  Marker,
} from "react-google-maps";
import "./App.css";
import DestinationMarkers from "./DestinationMarkers/DestinationMarkers";
import CurrentPositionMarker from "./CurrentPositionMarker/CurrentPositionMarker";
import MapStyle from "./mapStyle";
import EllisCreekFarmLogo from "./elliscreekfarmlogo.png";

require("dotenv").config();

function Map() {
  return (
    <div>
      <img
        src={EllisCreekFarmLogo}
        alt="Ellis Creek Farm Logo"
        class="MapLogo"
      ></img>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -36.848461, lng: 174.763336 }} //auckland city co-ordinates
        options={{
          styles: MapStyle,
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        <DestinationMarkers lat={-36.75685} lng={174.71283} />
        <DestinationMarkers lat={-36.75508} lng={174.71989} />
        <DestinationMarkers lat={-36.75596} lng={174.72515} />
        <CurrentPositionMarker />
      </GoogleMap>
    </div>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  console.log(process.env.REACT_APP_GOOGLE_KEY);
  return (
    <div className="App">
      <div style={{ width: "100vw", height: "100vh" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    </div>
  );
}

export default App;
