import React, { Component } from 'react';
import './CurrentPositionMarker.css';
import { Marker } from "react-google-maps";
import truck from './truck.svg';

class CurrentPositionMarker extends Component {
    constructor(props){
      super(props);
      this.state = {
        lat:0,
        lng:0,
     };
   }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  componentDidMount() {
    if (navigator.geolocation) {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }; 
          this.setState({lat: pos.lat, lng: pos.lng});
        })
      }
    }
  }
 
  render() {
    return (
      <Marker
      position={{lat:this.state.lat, lng: this.state.lng}}
      icon={{
        url: truck,
        scaledSize: new window.google.maps.Size(30,30),
        origin: new window.google.maps.Point(0,0),
        anchor: new window.google.maps.Point(15,15)
      }}
      />
    );
  }
}

export default CurrentPositionMarker;