import React, { Component } from "react";
import "./assets/styles/style";
const { remote } = window.require("electron");
window.require("electron");

class App extends Component {
  state = {
    messsage: remote.getGlobal("sharedObject").someProperty
  };

  render() {
    return (
      <div className="App">
        <span>{this.state.messsage}</span>
        <h1>Reactron</h1>
        <div className="system-versions">
          <span id="node-version" />
          <br />
          <span id="electron-version" />
        </div>
        <p>Happy Coding!</p>
      </div>
    );
  }
}

export default App;
