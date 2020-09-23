import React, { Component } from "react";
import "./CustomerInfo.css";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

class CustomerInfo extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      error: null,
      users: [],
      userData: {},
      response: {},
    };
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
    return (
      <div className="App">
        <Table className="table">
          <thead>
            <tr className="btn-primary">
              <th colSpan="2">User Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>First Name </th>
              <td>Kobe</td>
            </tr>{" "}
            <tr>
              <th>Last Name </th>
              <td>Byrant</td>
            </tr>{" "}
            <tr>
              <th>Mobile No </th>
              <td>6422222222</td>
            </tr>{" "}
            <tr>
              <th>Address </th>
              <td>Auckland</td>
            </tr>{" "}
            <tr>
              <th>Order </th>
              <td>kfc</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CustomerInfo;
