import React, { Component } from "react";
import "./landing.css";
export default class Landing extends Component {
  render() {
    return (
      <main>
        <a className="circle">
          <h1>Existing group</h1>
        </a>
        <a className="circle">
          <h1>Create new group</h1>
        </a>
      </main>
    );
  }
}
