import React, { Component } from 'react';
import './Directions.css';
import house from "./house.svg";
import { Marker, DirectionsService, DirectionsRenderer} from "react-google-maps";

class directions extends Component {
  constructor(props){
    super(props);
    // this.state = {};
  }

  // componentWillMount(){}
  componentDidMount(){
    

   
  }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  
  //lat:this.props.lat,lng:this.props.lng
  //lat:-36.756850, lng:174.712830}
  render() {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin:'-36.756850, 174.712830',
        destination: '-36.755080, 174.719890',
        travelMode: 'DRIVING',

      },
      (result, status) => {
        if (status === 'OK') {
          
          this.setState({
            directions: result
          });
          return (
            <DirectionsRenderer directions={directions} />
          );
          console.log(result);
        } else {
          console.error(`directions error: ${result}`);
        }
      }
    );
    return (
      <DirectionsRenderer directions={this.props.directions} />
     
    );
  }
}

export default directions;