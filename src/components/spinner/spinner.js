import React, { Component } from "react";
import MDSpinner from "react-md-spinner";
import "./spinner.css";

export default class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <MDSpinner />
      </div>
    );
  }
}
