import React, { Component } from "react";
import { Link } from "react-router-dom";
const divStyle = {
  background: "black",
  textAlign: "center",
  padding: "5px ",
  color: "white",
  fontSize: "30px"
};

const aStyle = {
  fontSize: "15px",
  color: "#a1b2c3"
};
export default class Header extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1>My Diary</h1>
        <Link style={aStyle} to="/">
          {"  Home   "}
        </Link>
        <Link style={aStyle}> {"   |   "} </Link>
        <Link style={aStyle} to="/about">
          
          {" About "}
        </Link>
      </div>
    );
  }
}
