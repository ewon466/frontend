import React, { Component } from "react";
import "./CustomerInfo.css";
import axios from "axios";

class CustomerInfo extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    axios
      .get("https://localhost:5001/api/data/get_order/0")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return <div>response</div>;
  }
}

export default CustomerInfo;
