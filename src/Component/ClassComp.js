import React, { Component } from "react";
import './Class.css'
export default class ClassComp extends Component {
  render() {
    return (
      <div  className="classCard">
        <h1>This is created using the Class component</h1>
        <p>This is done using the external CSS</p>
        <p style={{ color: "blue" }}>This is done using the internal CSS</p>
      </div>
    );
  }
}
