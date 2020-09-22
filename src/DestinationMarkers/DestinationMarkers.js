import React, { Component } from "react";
import "./DestinationMarkers.css";
import house from "./house.svg";
import { Marker, InfoWindow } from "react-google-maps";

import CustomerInfo from "../CustomerInfo/CustomerInfo";

class DestinationMarkers extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleToggleOpen = () => {
    if (this.state.isOpen) {
      this.handleToggleClose();
    } else {
      this.setState({
        isOpen: true,
      });
    }
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

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
        position={{ lat: this.props.lat, lng: this.props.lng }}
        icon={{
          url: house,
          scaledSize: new window.google.maps.Size(30, 30),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(15, 15),
        }}
        onClick={() => this.handleToggleOpen()}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={() => this.handleToggleClose()}>
            <span>
              <CustomerInfo></CustomerInfo>
            </span>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default DestinationMarkers;
