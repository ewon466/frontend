import React, { Component } from 'react';
import './DestinationMarkers.css';
import house from "./house.svg";
import { Marker, } from "react-google-maps";

class DestinationMarkers extends Component {
  constructor(props){
    super(props);
    // this.state = {};
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  
  //lat:this.props.lat,lng:this.props.lng
  //lat:-36.756850, lng:174.712830}
  render() {
 
    return (
      <Marker
        position={{lat:this.props.lat,lng:this.props.lng}}
        icon = {{
        url:house,
        scaledSize: new window.google.maps.Size(30,30),
        origin: new window.google.maps.Point(0,0),
        anchor: new window.google.maps.Point(15,15),
      }}
      />
    );
  }
}

export default DestinationMarkers;